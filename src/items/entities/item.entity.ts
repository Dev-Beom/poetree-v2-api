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
import { Category } from 'src/categories/entities/category.entity';
import { ItemCode } from 'src/item-codes/entities/item-code.entity';
import { ItemReview } from 'src/item-reviews/entities/item-review.entity';
import { Fund } from 'src/funds/entities/fund.entity';
import { FundRequest } from 'src/fund-requests/entities/fund-request.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ schema: 'crow', name: 'items' })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'boolean', default: false })
  isRecommended: boolean;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @Column({ type: 'int' })
  targetPrice: number;

  @Column({ nullable: true })
  imageURL: string;

  @Column()
  description: string;

  @Column()
  point: number;

  @Column()
  startsAt: Date;

  @Column()
  endsAt: Date;

  @Column({ default: 0 })
  investCount: number;

  @Column({ default: 0 })
  views: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;

  @ManyToOne(() => ItemCode, (itemCode) => itemCode.items, { nullable: true })
  itemCode: ItemCode;

  @ManyToOne(() => User, (user) => user.items)
  user: User;

  @OneToMany(() => ItemReview, (itemReviews) => itemReviews.item)
  itemReviews: ItemReview[];

  @OneToMany(() => Fund, (fund) => fund.item)
  funds: Fund[];

  @OneToMany(() => FundRequest, (fundRequest) => fundRequest.item)
  fundRequests: FundRequest[];
}
