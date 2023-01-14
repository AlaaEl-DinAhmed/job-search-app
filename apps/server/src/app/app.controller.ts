import { Controller, Get, Query } from '@nestjs/common';

import { JobQueryDto } from './app.dto';
import { AppService } from './app.service';

@Controller('jobs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getJobs(@Query() query: JobQueryDto) {
    return this.appService.getJobs(query);
  }
}
