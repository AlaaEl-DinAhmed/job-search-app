import { Controller, Get, Query } from '@nestjs/common';
import { JobQueryDto } from './jobs.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(@Query() query: JobQueryDto) {
    return this.jobsService.getJobs(query);
  }
}
