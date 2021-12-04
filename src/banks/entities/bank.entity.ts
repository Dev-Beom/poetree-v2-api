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
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  code: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'boolean', default: 1 })
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
