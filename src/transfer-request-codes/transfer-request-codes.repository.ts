import { EntityRepository, Repository } from 'typeorm';
import { TransferRequestCode } from './entities/transfer-request-code.entity';

@EntityRepository(TransferRequestCode)
export class TransferRequestCodeRepository extends Repository<TransferRequestCode> {}
