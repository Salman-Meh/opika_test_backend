import { Module, NestModule } from '@nestjs/common';
import { RedisService } from '../common';
import { MongoModule } from './schema/mongoose.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongoModule],
  controllers: [UserController],
  providers: [UserService, RedisService],
})
export class UserModule implements NestModule {
  configure() {}
}
