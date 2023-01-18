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
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.createUser(body);
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
