import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async register(createUserDTO: CreateUserDto) {
    // encyrpt the user password here
    // For example, using bcrypt:
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const hashedPassword = await bcrypt.hash(createUserDTO, 10);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    createUserDTO.password = hashedPassword;
    return await this.usersService.createUser(createUserDTO);
  }
}
