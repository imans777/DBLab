import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { BooksModule } from './books/books.module';
import { JobseekersModule } from './jobseekers/jobseekers.module';

@Module({
  imports: [HelloModule, BooksModule, JobseekersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
