import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AdminUser } from './adminUsers.entity';
import { User } from './users.entity';

@Entity({ schema: 'crow', name: 'blockedUsers' })
export class BlockedUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.blockedUsers)
  user: User;

  @ManyToOne(() => AdminUser, (adminUser) => adminUser.blockedUsers)
  adminUser: AdminUser;
}
