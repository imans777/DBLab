import { Injectable } from '@nestjs/common';
import GenreEntity from '../db/genre.entity';
import CreateGenreDTO from '../dto/create-genre.dto';

@Injectable()
export class GenreService {
  async insert(genreDetails: CreateGenreDTO): Promise<GenreEntity> {
    const genreEntity: GenreEntity = GenreEntity.create();
    const { type } = genreDetails;

    genreEntity.type = type;
    await GenreEntity.save(genreEntity);
    return genreEntity;
  }
  async getAllGenre(): Promise<GenreEntity[]> {
    return await GenreEntity.find();
  }
}
