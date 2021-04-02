import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateBookDTO from '../dto/create-book.dto';
import { BookService } from './book.service';

@Controller('books/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('post')
  postUser(@Body() book: CreateBookDTO) {
    return this.bookService.insert(book);
  }

  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }
}
