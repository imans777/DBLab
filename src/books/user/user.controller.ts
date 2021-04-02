import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import CreateUserDTO from '../dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('post')
  postUser(@Body() user: CreateUserDTO) {
    return this.userService.insert(user);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get('books')
  getBooks(@Body('userID', ParseIntPipe) userID: number) {
    return this.userService.getBooksOfUser(userID);
  }
}
