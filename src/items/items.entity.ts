import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column()
  userId: number;

  @Column()
  isRecommended: boolean;

  @Column()
  isActive: boolean;

  @Column()
  targetPrice: number;

  @Column()
  imageURL: string;

  @Column()
  description: string;

  @Column()
  sellerId: number;

  @Column()
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
}
