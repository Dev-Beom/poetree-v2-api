import { EntityRepository, Repository } from 'typeorm';
import { UnregisteredUser } from './entities/unregistered-user.entity';

@EntityRepository(UnregisteredUser)
export class UnregisteredUserRepository extends Repository<UnregisteredUser> {}
