import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column()
  loginProvider: string;

  @Column()
  ci: string;

  @Column()
  di: string;

  @Column()
  accountNumber: number;

  @Column()
  accountName: string;

  @Column()
  bankId: number;

  @Column()
  point: number;

  @Column()
  companyId: number;

  @Column()
  unregisteredUserId: number;

  @Column({ type: 'boolean' })
  isBlocked: boolean;

  @Column({ type: 'boolean' })
  isPush: boolean;

  @Column({ type: 'boolean' })
  isSeller: boolean;

  @Column()
  lastLoginAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
