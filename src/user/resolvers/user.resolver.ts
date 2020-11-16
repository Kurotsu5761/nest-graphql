import { PostService } from './../../post/service/post.service';
import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
  InputType,
  Field,
} from '@nestjs/graphql';
import { User } from '../models/user.interface';
import { User as UserEntity } from '../models/user.entity';
import { UserService } from '../service/user.service';

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  username: string;
}

@Resolver(of => UserEntity)
export class UserResolver {
  constructor(
    private userService: UserService,
    private postsService: PostService,
  ) {}

  @Query(() => UserEntity, { name: 'user' })
  async getUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.get(id);
  }

  @Query(() => [UserEntity], { name: 'users' })
  getAllUser(): User[] {
    return this.userService.getAll();
  }

  @Mutation(() => Boolean)
  async createUser(
    @Args('userInfo', { type: () => UserInput }) userInput: UserInput,
  ) {
    this.userService.create(userInput as User);
    return true;
  }

  @ResolveField()
  async posts(@Parent() author: User) {
    const { id } = author;
    return;
  }
}
