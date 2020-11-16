import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostResolver } from './resolver/post.resolver';

@Module({
  providers: [PostService, PostResolver],
})
export class PostModule {}
