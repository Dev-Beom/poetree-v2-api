import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockedUsersModule } from './blocked-users/blocked-users.module';
import { CategoriesModule } from './categories/categories.module';
import config from './ormconfig';
import { UnregisteredUsersModule } from './unregistered-users/unregistered-users.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { FollowsModule } from './follows/follows.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { PostHashtagsModule } from './post-hashtags/post-hashtags.module';
import { CommentsModule } from './comments/comments.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { PostLikesModule } from './post-likes/post-likes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    AdminUsersModule,
    BlockedUsersModule,
    CategoriesModule,
    UnregisteredUsersModule,
    UsersModule,
    AuthModule,
    PostsModule,
    FollowsModule,
    HashtagsModule,
    PostHashtagsModule,
    CommentsModule,
    PostLikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
