import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminUsersModule } from "./domains/admin-users/admin-users.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlockedUsersModule } from "./domains/blocked-users/blocked-users.module";
import { CategoriesModule } from "./domains/categories/categories.module";
import { UnregisteredUsersModule } from "./domains/unregistered-users/unregistered-users.module";
import { UsersModule } from "./domains/users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from "./domains/posts/posts.module";
import { FollowsModule } from "./domains/follows/follows.module";
import { HashtagsModule } from "./domains/hashtags/hashtags.module";
import { PostHashtagsModule } from "./domains/post-hashtags/post-hashtags.module";
import { CommentsModule } from "./domains/comments/comments.module";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { PostLikesModule } from "./domains/post-likes/post-likes.module";
import { PhotosModule } from "./domains/photos/photos.module";
import { TypeormConfig } from "./config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeormConfig),
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
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
