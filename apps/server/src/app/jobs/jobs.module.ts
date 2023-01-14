import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    HttpModule.register({
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    }),
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
