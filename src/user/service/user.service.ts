import { Injectable } from '@nestjs/common';
import { User } from '../models/user.interface';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(user: User) {
    user.id = v4();
    this.users.push(user);
  }

  getAll() {
    return this.users;
  }

  get(id: string) {
    return this.users.find(() => {
      id;
    });
  }
}
