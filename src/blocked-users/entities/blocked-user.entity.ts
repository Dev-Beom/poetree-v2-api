import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { AdminUser } from 'src/admin-users/entities/admin-user.entity';

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
