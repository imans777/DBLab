import { Injectable } from '@nestjs/common';
import BookEntity from '../db/book.entity';
import GenreEntity from '../db/genre.entity';
import UserEntity from '../db/user.entity';
import CreateBookDTO from '../dto/create-book.dto';

@Injectable()
export class BookService {
  async insert(bookDetails: CreateBookDTO): Promise<BookEntity> {
    const { name, userID, genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async getAllBooks(): Promise<BookEntity[]> {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async deleteBook(bookID: number) {
    await BookEntity.delete({ id: bookID });
  }

  async editBook(bookDetails: CreateBookDTO): Promise<BookEntity> {
    const book = await BookEntity.findOne({ name: bookDetails.name });
    if (book == null) throw new Error('book not found');

    book.user = await UserEntity.findOne(bookDetails.userID);
    book.genres = [];
    for (let i = 0; i < bookDetails.genreIDs.length; i++) {
      const genre = await GenreEntity.findOne(bookDetails.genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
}
