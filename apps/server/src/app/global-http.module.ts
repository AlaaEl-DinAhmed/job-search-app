import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    HttpModule.register({
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    }),
  ],
  exports: [HttpModule],
})
export class GlobalHttpModule {}
