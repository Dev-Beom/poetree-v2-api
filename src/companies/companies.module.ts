import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepository } from './companies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRepository])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
