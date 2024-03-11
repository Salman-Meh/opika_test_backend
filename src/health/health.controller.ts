import { Controller, Get, Logger } from '@nestjs/common';

@Controller('health')
export class HealthController {
  private readonly logger = new Logger(HealthController.name);

  @Get()
  healthCheck(): { status: string } {
    this.logger.log('Received a request to check the service health');
    return { status: 'ok' };
  }
}
