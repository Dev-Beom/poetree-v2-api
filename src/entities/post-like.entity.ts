import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD:src/domains/post-likes/entities/post-like.entity.ts
import { Post } from 'src/domains/posts/entities/post.entity';
import { User } from 'src/domains/users/entities/user.entity';
=======
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/post-like.entity.ts

@Entity({ schema: 'poetree', name: 'postLikes' })
export class PostLike extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Post, (post) => post.postLikes)
  post: Post;

  @ManyToOne(() => User, (user) => user.postLikes)
  user: User;
}
