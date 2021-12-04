import { Bank } from 'src/banks/entities/bank.entity';
import { TransferCode } from 'src/transfer-codes/entities/transfer-code.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'transfers' })
export class Transfer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  point: number;

  @Column()
  transferCodeId: number;

  @Column()
  accountName: string;

  @Column()
  accounNumber: number;

  @Column()
  transferedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Bank, (bank) => bank.transfers)
  bank: Bank;

  @ManyToOne(() => TransferCode, (transferCode) => transferCode.transfers)
  transferCode: TransferCode;

  @ManyToOne(() => User, (user) => user.transfers)
  user: User;
}
