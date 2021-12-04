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

  @ManyToOne(() => Bank, (bank) => bank.users)
  bank: Bank;

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @ManyToOne(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.users,
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
