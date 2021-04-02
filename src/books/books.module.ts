import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/user.entity';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [
    UserModule,
    GenreModule,
    BookModule,
    TypeOrmModule.forFeature([UserEntity, BookEntity, GenreEntity]),
    TypeOrmModule.forRoot(),
  ],
})
export class BooksModule {}
