import { EntityRepository, Repository } from 'typeorm';
import { BlockedUser } from '../entities/blocked-user.entity';

@EntityRepository(BlockedUser)
export class BlockedUserRepository extends Repository<BlockedUser> {}
