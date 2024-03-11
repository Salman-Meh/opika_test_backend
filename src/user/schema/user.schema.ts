import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '../user.interface';

@Schema()
export class User extends Document implements IUser {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  bio: string;

  @Prop()
  profilePicture: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
