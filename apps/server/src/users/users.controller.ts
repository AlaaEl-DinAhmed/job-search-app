import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
@UseInterceptors(new SerializeInterceptor(UserDto))
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  signIn(@Body() body: CreateUserDto) {
    return this.authService.signIn(body);
  }

  @Get('/users')
  async findAllUsers(@Query('email') email: CreateUserDto['email']) {
    return await this.userService.findUserByEmail(email);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findUser(+id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: Partial<CreateUserDto>
  ) {
    try {
      return await this.userService.update(+id, body);
    } catch (error) {
      throw new NotFoundException('User not found.');
    }
  }
}
