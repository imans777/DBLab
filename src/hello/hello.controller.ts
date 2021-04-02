import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PersonDTO } from './dto/person.dto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // WARM UP CODES --->
  //   @ApiResponse({ status: 200, description: 'say hello!' })
  //   @Post('welcome')
  //   @Header('Content-Type', 'application/json')
  //   async sayWelcome(@Body() personDTO: PersonDTO): Promise<{ data: string }> {
  //     return {
  //       data: await this.helloService.welcome(personDTO),
  //     };
  //   }

  //   @ApiResponse({ status: 200 })
  //   @ApiQuery({ name: 'name', required: true, type: String })
  //   @ApiQuery({
  //     name: 'year',
  //     required: false,
  //     type: Number,
  //     description: 'you can ignore this',
  //   })
  //   @Get('welcome')
  //   async sayWelcome2(
  //     @Query('name') iName,
  //     @Query('year') iYear,
  //   ): Promise<{ data: string }> {
  //     return {
  //       data: await this.helloService.welcome({ name: iName, year: iYear }),
  //     };
  //   }
}
