import { EntityRepository, Repository } from 'typeorm';
import { AdminUser } from '../entities/admin-user.entity';

@EntityRepository(AdminUser)
export class AdminUserRepository extends Repository<AdminUser> {}
