import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Expenses {
  @Prop({
    type: String,
    required: true,
  })
  category: string;
  @Prop({
    type: String,
    required: true,
  })
  amount: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  })
  user: mongoose.Types.ObjectId;
}

export const expenseModel = SchemaFactory.createForClass(Expenses);
