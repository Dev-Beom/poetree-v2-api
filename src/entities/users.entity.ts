import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bank } from './banks.entity';
import { BlockedUser } from './blockedUsers.entity';
import { Fund } from './funds.entity';

@Entity({ schema: 'crow', name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column({ unique: true })
  phone: number;

  @Column()
  address: string;

  @Column()
  loginProvider: string;

  @Column({ unique: true, nullable: true })
  ci: string;

  @Column({ unique: true, nullable: true })
  di: string;

  @Column({ unique: true, nullable: true })
  accountNumber: number;

  @Column({ nullable: true })
  accountName: string;

  @Column({ default: 0 })
  point: number;

  @Column({ nullable: true })
  companyId: number;

  @Column({ nullable: true })
  unregisteredUserId: number;

  @Column({ default: false })
  isBlocked: boolean;

  @Column({ default: false })
  isPush: boolean;

  @Column({ default: false })
  isSeller: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToOne(() => Bank)
  @JoinColumn()
  bank: Bank;

  @OneToMany(() => BlockedUser, (blockedUser) => blockedUser.user)
  blockedUsers: BlockedUser[];

  @OneToMany(() => Fund, (fund) => fund.user)
  funds: Fund[];
}
