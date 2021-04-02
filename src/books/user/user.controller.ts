import {
  Body,
  Controller,
  Get,
  Header,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import CreateUserDTO from '../dto/create-user.dto';
import { UserService } from './user.service';

@Controller('books/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 201, description: 'insert new user' })
  @Header('Content-Type', 'application/json')
  @Post('post')
  postUser(@Body() user: CreateUserDTO) {
    return this.userService.insert(user);
  }

  @ApiResponse({ status: 200, description: 'get all users' })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiResponse({ status: 200, description: 'get books of a user' })
  @ApiResponse({ status: 400, description: 'validation failed' })
  @ApiQuery({
    name: 'userID',
    required: true,
    type: Number,
    description: 'ID of the user',
  })
  @Get('books')
  getBooks(@Body('userID', ParseIntPipe) userID: number) {
    return this.userService.getBooksOfUser(userID);
  }
}
