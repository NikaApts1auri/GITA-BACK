/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExpensesService } from 'src/expenses/expenses.service';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, mongo } from 'mongoose';
import { User } from './schema/users.schema';
import { populate } from 'dotenv';
import path from 'path';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private userModel: Model<User>,
    @Inject(forwardRef(() => ExpensesService))
    private expensesService: ExpensesService,
  ) {}

  async create({ age, email, fullName }: CreateUserDto) {
    const existUser = await this.userModel.findOne({ email });
    if (existUser) {
      throw new BadRequestException('User with this email already exist');
    }
    const newUser = await this.userModel.create({ age, email, fullName });
    return newUser;
  }

  findAll() {
    return this.userModel
      .find()
      .populate({ path: 'expenses', select: '-user' });
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!updatedUser) throw new NotFoundException('User not found');

    return updatedUser;
  }
  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    // this.expensesService.deleteAllExpesesByUserId();
    // return `This action removes a #${id} user`;
  }

  async addExpenseToUser(expenseId, userId) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      {
        $push: { expenses: expenseId },
      },
      { new: true },
    );
    return updatedUser;
  }
}
