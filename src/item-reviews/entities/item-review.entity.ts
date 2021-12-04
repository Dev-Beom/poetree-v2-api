import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ schema: 'crow', name: 'itemReviews' })
export class ItemReview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: 'decimal' })
  rate: number;

  @Column()
  review: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.itemReviews)
  user: User;

  @ManyToOne(() => Item, (item) => item.itemReviews)
  item: Item;
}
