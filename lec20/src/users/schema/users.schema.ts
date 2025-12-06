import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export
@Schema()
class User {
  @Prop({
    type: String,
    required: true,
  })
  fullName: string;
  @Prop({
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  })
  email: string;
  @Prop({
    type: Number,
    required: true,
  })
  age: number;

  @Prop({
    type: [{ type: mongoose.Types.ObjectId, ref: 'expense' }],
    default: [],
  })
  expenses: mongoose.Types.ObjectId[];
}
export const userModel = SchemaFactory.createForClass(User);
