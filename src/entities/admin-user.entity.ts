import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

<<<<<<< HEAD:src/domains/admin-users/entities/admin-user.entity.ts
import { BlockedUser } from 'src/domains/blocked-users/entities/blocked-user.entity';
=======
import { BlockedUser } from 'src/entities/blocked-user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/admin-user.entity.ts

@Entity({ schema: 'poetree', name: 'adminUsers' })
export class AdminUser extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => BlockedUser, (blockedUser) => blockedUser.adminUser)
  blockedUsers: BlockedUser[];
}
