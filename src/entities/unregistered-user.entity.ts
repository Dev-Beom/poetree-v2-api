<<<<<<< HEAD:src/domains/unregistered-users/entities/unregistered-user.entity.ts
import { User } from 'src/domains/users/entities/user.entity';
=======
import { User } from 'src/entities/user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/unregistered-user.entity.ts
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
