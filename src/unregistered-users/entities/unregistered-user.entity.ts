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
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column('varchar', { unique: true, nullable: true })
  ci: string;

  @Column({ nullable: true })
  accountName: string;

  @Column({ unique: true, nullable: true })
  accountNumber: number;

  @Column({ type: 'varchar' })
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
