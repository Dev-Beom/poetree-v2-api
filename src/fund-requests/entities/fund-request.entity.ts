import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FundRequestCode } from 'src/fund-request-codes/entities/fund-request-code.entity';
import { User } from 'src/users/entities/user.entity';
import { Item } from 'src/items/entities/item.entity';

@Entity({ schema: 'crow', name: 'fundRequests' })
export class FundRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  point: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.fundRequests)
  user: User;

  @ManyToOne(() => Item, (item) => item.fundRequests)
  item: Item;

  @ManyToOne(
    () => FundRequestCode,
    (fundRequestCode) => fundRequestCode.fundRequests,
  )
  fundRequestCode: FundRequestCode;
}
