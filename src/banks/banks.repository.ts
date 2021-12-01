import { EntityRepository, Repository } from 'typeorm';
import { Bank } from '../entities/banks.entity';

@EntityRepository(Bank)
export class BankRepository extends Repository<Bank> {}
