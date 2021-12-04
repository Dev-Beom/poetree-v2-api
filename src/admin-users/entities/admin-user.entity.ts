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

import { BlockedUser } from 'src/blocked-users/entities/blocked-user.entity';

@Entity({ schema: 'crow', name: 'adminUsers' })
export class AdminUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
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
