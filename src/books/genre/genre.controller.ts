import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateGenreDTO from '../dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('books/genre')
export class GenreController {
  constructor(private readonly genreServices: GenreService) {}
  @Post('post')
  postGenre(@Body() genre: CreateGenreDTO) {
    return this.genreServices.insert(genre);
  }
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
