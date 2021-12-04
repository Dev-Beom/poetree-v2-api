import { EntityRepository, Repository } from 'typeorm';
import { TransferRequest } from './entities/transfer-request.entity';

@EntityRepository(TransferRequest)
export class TransferRequestRepository extends Repository<TransferRequest> {}
