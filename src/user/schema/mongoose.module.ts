import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configs } from '../../config';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(configs.mongoUrl),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class MongoModule {}
