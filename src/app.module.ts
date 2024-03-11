import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { UserModule } from './user';

@Module({
  controllers: [HealthController],
  imports: [UserModule],
})
export class AppModule {}
