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

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
