import { Data } from '@job-search-app/util-interface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { JobQueryDto } from './jobs.dto';

@Injectable()
export class JobsService {
  constructor(private readonly http: HttpService) {}

  getJobs({ cursor, limit }: JobQueryDto): Observable<Data> {
    return this.http
      .get('https://skills-api-zeta.vercel.app/jobs', {
        params: {
          cursor,
          limit,
        },
      })
      .pipe(map((res) => res.data));
  }
}
