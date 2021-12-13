import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BanksModule } from './banks/banks.module';
import { BlockedUsersModule } from './blocked-users/blocked-users.module';
import { CategoriesModule } from './categories/categories.module';
import { CompaniesModule } from './companies/companies.module';
import { FundCodesModule } from './fund-codes/fund-codes.module';
import { FundRequestCodesModule } from './fund-request-codes/fund-request-codes.module';
import { FundRequestsModule } from './fund-requests/fund-requests.module';
import { FundsModule } from './funds/funds.module';
import { ItemCodesModule } from './item-codes/item-codes.module';
import { ItemReviewsModule } from './item-reviews/item-reviews.module';
import { ItemsModule } from './items/items.module';
import config from './ormconfig';
import { TransferCodesModule } from './transfer-codes/transfer-codes.module';
import { TransferRequestCodesModule } from './transfer-request-codes/transfer-request-codes.module';
import { TransferRequestsModule } from './transfer-requests/transfer-requests.module';
import { TransfersModule } from './transfers/transfers.module';
import { UnregisteredUsersModule } from './unregistered-users/unregistered-users.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { FollowsModule } from './follows/follows.module';
import { EventModule } from './event/event.module';
import { EventsModule } from './events/events.module';
import { LikesModule } from './likes/likes.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { PostHashtagsModule } from './post-hashtags/post-hashtags.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    AdminUsersModule,
    BanksModule,
    BlockedUsersModule,
    CategoriesModule,
    CompaniesModule,
    FundCodesModule,
    FundRequestCodesModule,
    FundRequestsModule,
    FundsModule,
    ItemCodesModule,
    ItemReviewsModule,
    ItemsModule,
    TransferCodesModule,
    TransferRequestCodesModule,
    TransferRequestsModule,
    TransfersModule,
    UnregisteredUsersModule,
    UsersModule,
    AuthModule,
    PostsModule,
    FollowsModule,
    EventModule,
    EventsModule,
    LikesModule,
    HashtagsModule,
    PostHashtagsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
