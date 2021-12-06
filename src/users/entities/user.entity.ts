import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bank } from 'src/banks/entities/bank.entity';
import { BlockedUser } from 'src/blocked-users/entities/blocked-user.entity';
import { Company } from 'src/companies/entities/company.entity';
import { FundRequest } from 'src/fund-requests/entities/fund-request.entity';
import { Fund } from 'src/funds/entities/fund.entity';
import { ItemReview } from 'src/item-reviews/entities/item-review.entity';
import { TransferRequest } from 'src/transfer-requests/entities/transfer-request.entity';
import { Transfer } from 'src/transfers/entities/transfer.entity';
import { UnregisteredUser } from 'src/unregistered-users/entities/unregistered-user.entity';
import { Item } from 'src/items/entities/item.entity';

@Entity({ schema: 'crow', name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 30 })
  name: string;

  @Column('varchar', { unique: true, length: 30 })
  email: string;

  @Column('varchar', { length: 100, nullable: true })
  password: string;

  @Column('int', { unique: true, nullable: true })
  phone: number;

  @Column('varchar', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('varchar', { default: 'local' })
  loginProvider: string;

  @Column('varchar', { unique: true, nullable: true })
  ci: string;

  @Column({ unique: true, nullable: true })
  di: string;

  @Column({ unique: true, nullable: true })
  accountNumber: number;

  @Column({ nullable: true })
  accountName: string;

  @Column('int', { default: 0 })
  point: number;

  @Column('boolean', { default: false })
  isBlocked: boolean;

  @Column({ default: false })
  isPush: boolean;

  @Column({ default: false })
  isSeller: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => Bank, (bank) => bank.users, { nullable: true })
  bank: Bank;

  @ManyToOne(() => Company, (company) => company.users, { nullable: true })
  company: Company;

  @ManyToOne(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.users,
    { nullable: true },
  )
  unregisteredUser: UnregisteredUser;

  @OneToMany(() => BlockedUser, (blockedUser) => blockedUser.user)
  blockedUsers: BlockedUser[];

  @OneToMany(() => Fund, (fund) => fund.user)
  funds: Fund[];

  @OneToMany(() => ItemReview, (itemReview) => itemReview.user)
  itemReviews: ItemReview[];

  @OneToMany(() => FundRequest, (fundRequest) => fundRequest.user)
  fundRequests: FundRequest[];

  @OneToMany(() => TransferRequest, (transferRequest) => transferRequest.user)
  transferRequests: TransferRequest[];

  @OneToMany(() => Transfer, (transfer) => transfer.user)
  transfers: Transfer[];

  @OneToMany(() => Item, (item) => item.user)
  items: Item[];

  @OneToMany(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.user,
    { nullable: true },
  )
  unregisteredUsers: UnregisteredUser[];
}
