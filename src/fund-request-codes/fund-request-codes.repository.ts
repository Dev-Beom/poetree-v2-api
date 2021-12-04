import { EntityRepository, Repository } from 'typeorm';
import { FundRequestCode } from './entities/fund-request-code.entity';

@EntityRepository(FundRequestCode)
export class FundRequestCodeRepository extends Repository<FundRequestCode> {}
