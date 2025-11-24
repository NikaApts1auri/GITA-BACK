import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users-dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'nika', age: 20 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];
  getAllUsers() {
    return this.users;
  }
  createUser({ name, age }: CreateUsersDto) {
    if (!name || !age) {
      throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
    }
    const lastId = this.users[this.users.length - 1].id;
    const newUser = { id: lastId + 1, name, age };
    this.users.push(newUser);
    return newUser;
  }
  getUserById(userId: number) {
    const user = this.users.find((user) => user.id === userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }
  deleteUserById(userId: number) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      throw new BadRequestException('User not found');
    }
    const [deletedUser] = this.users.splice(userIndex, 1);
    return deletedUser;
  }
  updateUserById(userId: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      throw new BadRequestException('User not found');
    }
    const updateReq = {};
    if (updateUserDto.name) {
      updateReq['name'] = updateUserDto.name;
    }
    if (updateUserDto.age) {
      updateReq['age'] = updateUserDto.age;
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateReq,
    };
  }
}
