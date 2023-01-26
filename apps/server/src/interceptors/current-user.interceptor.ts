import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.cookies || {};

    if (userId) {
      const user = await this.usersService.findUser(userId);
      request.currentUser = user;
    }
    return next.handle();
  }
}
