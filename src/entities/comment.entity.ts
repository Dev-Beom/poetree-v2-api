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
<<<<<<< HEAD:src/domains/comments/entities/comment.entity.ts
import { Post } from 'src/domains/posts/entities/post.entity';
import { User } from 'src/domains/users/entities/user.entity';
=======
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/comment.entity.ts

@Entity({ schema: 'poetree', name: 'comments' })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('int', { name: 'userId' })
  userId: number;

  @Column({ type: 'varchar', length: 30 })
  commenter: string;

  @Column('text')
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
