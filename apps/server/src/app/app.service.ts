import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { JobQueryDto } from './app.dto';
@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async getJobs({ cursor, limit }: JobQueryDto) {
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
