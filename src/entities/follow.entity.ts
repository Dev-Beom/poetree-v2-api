<<<<<<< HEAD:src/domains/follows/entities/follow.entity.ts
import { User } from 'src/domains/users/entities/user.entity';
=======
import { User } from 'src/entities/user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/follow.entity.ts
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'poetree', name: 'follows' })
export class Follow extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.followers)
  follower: User;

  @ManyToOne(() => User, (user) => user.followings)
  following: User;
}
