import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'transfers' })
export class Transfer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  bankId: number;

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
}
