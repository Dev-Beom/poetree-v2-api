import { User } from 'src/entities/users.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'items' })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column('int', { name: 'userId' })
  userId: number;

  @Column({ type: 'boolean' })
  isRecommended: boolean;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @Column()
  targetPrice: number;

  @Column()
  imageURL: string;

  @Column()
  description: string;

  @Column()
  sellerId: number;

  @Column({ default: null, nullable: true })
  itemStatusId: number;

  @Column()
  point: number;

  @Column()
  startsAt: Date;

  @Column()
  endsAt: Date;

  @Column()
  investCount: number;

  @Column()
  views: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
