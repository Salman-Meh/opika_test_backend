import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT || 6379),
    });
  }

  async get(key: string): Promise<any> {
    const value = await this.client.get(key);
    return JSON.parse(value) || null; // Parse JSON and handle null case
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.client.set(key, JSON.stringify(value), 'EX', ttl); // Set with optional TTL
  }

  async onModuleDestroy() {
    await this.client.quit(); // Close connection gracefully on application shutdown
  }
}