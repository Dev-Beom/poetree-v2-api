import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Transfer } from 'src/transfers/entities/transfer.entity';

@Entity({ schema: 'crow', name: 'banks' })
export class Bank extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Company, (company) => company.bank)
  companies: Company[];

  @OneToMany(() => User, (user) => user.bank)
  users: User[];

  @OneToMany(() => Transfer, (transfer) => transfer.bank)
  transfers: Transfer[];
}
