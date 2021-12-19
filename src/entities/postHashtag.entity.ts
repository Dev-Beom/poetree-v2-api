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
<<<<<<< HEAD:src/domains/post-hashtags/entities/postHashtag.entity.ts
import { Post } from 'src/domains/posts/entities/post.entity';
import { Hashtag } from 'src/domains/hashtags/entities/hashtag.entity';
=======
import { Post } from 'src/entities/post.entity';
import { Hashtag } from 'src/entities/hashtag.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/postHashtag.entity.ts

@Entity({ schema: 'poetree', name: 'postHashtags' })
export class PostHashtag extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  tag: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Post, (post) => post.postHashtags)
  post: Post;

  @ManyToOne(() => Hashtag, (hashtag) => hashtag.postHashtags)
  hashtag: Hashtag;
}
