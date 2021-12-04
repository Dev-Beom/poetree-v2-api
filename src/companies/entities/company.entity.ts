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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Bank, (bank) => bank.companies)
  bank: Bank;

  @OneToMany(() => User, (users) => users.company)
  users: User[];
}
