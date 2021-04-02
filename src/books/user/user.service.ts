import { Injectable } from '@nestjs/common';
import BookEntity from '../db/book.entity';
import UserEntity from '../db/user.entity';
import CreateUserDTO from '../dto/create-user.dto';

@Injectable()
export class UserService {
  async insert(userDetails: CreateUserDTO): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof userID);
    const user: UserEntity = await UserEntity.findOne({
      where: {
        id: userID,
      },
      relations: ['books'],
    });
    return user.books;
  }
}
