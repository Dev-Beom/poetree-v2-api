import { FundCode } from 'src/fund-codes/entities/fund-code.entity';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'funds' })
export class Fund extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.funds)
  user: User;

  @ManyToOne(() => FundCode, (fundCode) => fundCode.funds)
  fundCode: FundCode;

  @ManyToOne(() => Item, (item) => item.funds)
  item: Item;
}
