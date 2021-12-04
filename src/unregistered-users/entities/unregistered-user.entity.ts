import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => User, (user) => user.unregisteredUsers)
  user: User;

  @OneToMany(() => User, (user) => user.unregisteredUser)
  users: User[];
}
