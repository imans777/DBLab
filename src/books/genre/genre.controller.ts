import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateGenreDTO from '../dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('books/genre')
export class GenreController {
  constructor(private readonly genreServices: GenreService) {}

  @ApiResponse({ status: 200, description: 'insert new genre' })
  @Header('Content-Type', 'application/json')
  @Post('post')
  postGenre(@Body() genre: CreateGenreDTO) {
    return this.genreServices.insert(genre);
  }

  @ApiResponse({ status: 200, description: 'get all genres' })
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
