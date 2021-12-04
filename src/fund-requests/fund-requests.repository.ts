import { EntityRepository, Repository } from 'typeorm';
import { FundRequest } from './entities/fund-request.entity';

@EntityRepository(FundRequest)
export class FundRequestRepository extends Repository<FundRequest> {}
