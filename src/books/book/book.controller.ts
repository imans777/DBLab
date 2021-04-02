import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateBookDTO from '../dto/create-book.dto';
import { BookService } from './book.service';

@Controller('books/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiResponse({ status: 200, description: 'insert new book' })
  @Post('post')
  @Header('Content-Type', 'application/json')
  postUser(@Body() book: CreateBookDTO) {
    return this.bookService.insert(book);
  }

  @ApiResponse({ status: 200, description: 'get all books' })
  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }
}
