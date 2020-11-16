import { Post } from './../../post/models/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  username: string;

  @Field(() => [Post])
  @OneToMany(
    () => Post,
    post => post.user,
  )
  posts: Post[];
}
