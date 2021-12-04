import { EntityRepository, Repository } from 'typeorm';
import { FundCode } from './entities/fund-code.entity';

@EntityRepository(FundCode)
export class FundCodeRepository extends Repository<FundCode> {}
