import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUsersDto } from './dto/create-users-dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() createUserDto: CreateUsersDto) {
    console.log(createUserDto);
    return this.userService.createUser(createUserDto);
  }
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return this.userService.getUserById(+id);
  }
  @Delete('/:id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(+id);
  }
  @Patch('/:id')
  updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserById(+id, updateUserDto);
  }
}
