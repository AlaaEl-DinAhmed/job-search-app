import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from './../users/dtos/create-user.dto';
import { UsersService } from './../users/users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp({ email, password }: CreateUserDto) {
    const user = await this.usersService.findUserByEmail(email);
    if (user === null) {
      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;
      const result = `${salt}.${hash.toString('hex')}`;

      const user = await this.usersService.createUser({
        email,
        password: result,
      });

      return user;
    }

    throw new BadRequestException('Email already in use.');
  }

  async signIn({ email, password }: CreateUserDto) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) throw new NotFoundException('User is not found.');

    const [salt, savedHashedPassword] = user.password.split('.');
    const hashedPassword = (await scrypt(password, salt, 32)) as Buffer;

    if (savedHashedPassword !== hashedPassword.toString('hex')) {
      throw new BadRequestException('Email or Password is incorrect.');
    }

    return user;
  }
}
