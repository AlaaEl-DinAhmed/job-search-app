import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  createUser({ email, password }: CreateUserDto) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  findUser(id: number) {
    return this.repo.findOneBy({ id });
  }

  findUserByEmail(email: string) {
    return this.repo.find({ where: { email } });
  }

  async update(id: number, props: Partial<User>) {
    const user = await this.repo.findOneByOrFail({ id });
    Object.assign(user, props);

    return this.repo.save(user);
  }

  deleteUser(id: number) {
    return this.repo.delete({ id });
  }
}
