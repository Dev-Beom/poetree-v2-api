import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'crow', name: 'unregisteredUsers' })
export class UnregisteredUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ci: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: number;

  @Column()
  bankId: string;

  @Column()
  registeredAt: Date;

  @Column()
  isBlock: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
