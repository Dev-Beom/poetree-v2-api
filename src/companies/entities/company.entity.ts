import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bank } from 'src/banks/entities/bank.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ schema: 'crow', name: 'companies' })
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'int', unique: true, nullable: true })
  phone: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  accountName: string;

  @Column({ type: 'int', unique: true, nullable: true })
  accountNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Bank, (bank) => bank.companies, { nullable: true })
  bank: Bank;

  @OneToMany(() => User, (users) => users.company)
  users: User[];
}
