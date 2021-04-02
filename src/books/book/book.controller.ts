import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateBookDTO from '../dto/create-book.dto';
import DeleteBookDTO from '../dto/delete-book.dto';
import { BookService } from './book.service';

@Controller('books/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiResponse({ status: 201, description: 'insert new book' })
  @Post('post')
  @Header('Content-Type', 'application/json')
  async postUser(@Body() book: CreateBookDTO) {
    return await this.bookService.insert(book);
  }

  @ApiResponse({ status: 200, description: 'get all books' })
  @Get()
  async getAll() {
    return await this.bookService.getAllBooks();
  }

  @ApiResponse({ status: 200, description: 'edits a book' })
  @ApiResponse({ status: 409, description: 'operation failed' })
  @Put()
  async editBook(@Body() book: CreateBookDTO) {
    return await this.bookService.editBook(book);
  }

  @ApiResponse({ status: 200, description: 'deletes existing book' })
  @ApiResponse({ status: 404, description: 'book not found' })
  @Delete()
  async deleteBook(@Body() book: DeleteBookDTO) {
    console.log('DELETE: ', book.id);
    return await this.bookService.deleteBook(book.id);
  }
}
