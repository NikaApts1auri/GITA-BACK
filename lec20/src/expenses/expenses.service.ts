import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CraeteExpenseDto } from './dto/create-expense.dto';
import { QueryParamsDTO } from './dto/pagination.dto';
import { UsersService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses } from './schema/expense.schema';
import { Model } from 'mongoose';

import { User } from 'src/users/schema/users.schema';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel('expense') private expenseModel: Model<Expenses>,
    @InjectModel('user') private userModel: Model<User>,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAllExpenses({ page, take }: QueryParamsDTO) {
    return this.expenseModel
      .find()
      .populate({ path: 'user', select: '-expenses' });
  }

  async getExpenseById(id: string) {
    const expense = await this.expenseModel.findById(id);
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }

  async createExpense({ amount, category, user }: CraeteExpenseDto) {
    const newExpense = await this.expenseModel.create({
      amount,
      category,
      user,
    });
    // await this.usersService.addExpenseToUser(newExpense._id, user);
    await this.userModel.findByIdAndUpdate(
      user,
      {
        $push: { expenses: newExpense._id },
      },
      { new: true },
    );
    return newExpense;
  }

  deleteAllExpesesByUserId() {}
}
