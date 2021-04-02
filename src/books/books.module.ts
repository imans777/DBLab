import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { BookModule } from './book/book.module';

@Module({
  providers: [BooksService, UserService],
  controllers: [BooksController, UserController],
  imports: [UserModule, GenreModule, BookModule],
})
export class BooksModule {}
