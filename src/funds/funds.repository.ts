import { EntityRepository, Repository } from 'typeorm';
import { Fund } from './entities/fund.entity';

@EntityRepository(Fund)
export class FundRepository extends Repository<Fund> {}
