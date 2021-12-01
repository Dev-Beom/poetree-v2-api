import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './ormconfig';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { BanksController } from './banks/banks.controller';
import { BanksModule } from './banks/banks.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ItemsModule, UsersModule, BanksModule],
  controllers: [AppController, BanksController],
  providers: [AppService],
})
export class AppModule {}
