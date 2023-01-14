import { Data } from '@job-search-app/util-interface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { JobQueryDto } from './app.dto';
@Injectable()
export class AppService {
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
