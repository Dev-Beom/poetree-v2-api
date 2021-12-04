import { EntityRepository, Repository } from 'typeorm';
import { TransferCode } from './entities/transfer-code.entity';

@EntityRepository(TransferCode)
export class TransferCodeRepository extends Repository<TransferCode> {}
