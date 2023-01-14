import { Controller, Get, Query } from '@nestjs/common';
import { JobQueryDto } from './jobs.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly appService: JobsService) {}

  @Get()
  getJobs(@Query() query: JobQueryDto) {
    return this.appService.getJobs(query);
  }
}
