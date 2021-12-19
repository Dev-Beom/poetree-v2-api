import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD:src/domains/blocked-users/entities/blocked-user.entity.ts
import { User } from 'src/domains/users/entities/user.entity';
import { AdminUser } from 'src/domains/admin-users/entities/admin-user.entity';
=======
import { User } from 'src/entities/user.entity';
import { AdminUser } from 'src/entities/admin-user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/blocked-user.entity.ts

@Entity({ schema: 'poetree', name: 'blockedUsers' })
export class BlockedUser extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('int', { name: 'userId' })
  userId: number;

  @Column('int', { name: 'adminUserId' })
  adminUserId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.blockedUsers)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => AdminUser, (adminUser) => adminUser.blockedUsers)
  @JoinColumn([{ name: 'adminUserId', referencedColumnName: 'id' }])
  adminUser: AdminUser;
}
