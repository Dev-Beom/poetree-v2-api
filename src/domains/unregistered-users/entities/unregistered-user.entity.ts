import { User } from 'src/domains/users/entities/user.entity';
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

@Entity({ schema: 'poetree', name: 'unregisteredUsers' })
export class UnregisteredUser extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

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
