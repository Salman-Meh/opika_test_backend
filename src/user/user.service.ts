import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RedisService } from '../common';
import { User, UserDocument } from './schema';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @Inject(RedisService) private readonly redisService: RedisService,
    @InjectModel(User.name) private readonly userModeler: Model<UserDocument>
  ) {}

  async getUserById(id: string) {
    try {
      this.logger.log(`getUserById called with id: ${id}`);

      const cacheKey = `userId:${id}`;
      const cachedUser = await this.redisService.get(cacheKey);
      if (cachedUser) {
        this.logger.log(`user found in redis ${JSON.stringify(cachedUser)}`);
        return cachedUser;
      }

      const user = await this.userModeler.findById(id).exec();
      if (!user) {
        throw { message: 'No user found' };
      }
      this.logger.log(`user found in mongo db ${JSON.stringify(user)}`);

      this.logger.log(`adding user to redis ${JSON.stringify(user)}`);
      await this.redisService.set(cacheKey, user, 60 * 60);

      return user;
    } catch (error) {
      this.logger.error(error);
      return error;
    }
  }
}
