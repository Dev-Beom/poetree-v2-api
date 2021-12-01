import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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

  @Column('int')
  userId: number;

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

  @Column({ default: null, nullable: true })
  itemCodeId: number;

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
}
