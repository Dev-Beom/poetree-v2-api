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
import { Post } from 'src/entities/post.entity';
import { Hashtag } from 'src/entities/hashtag.entity';

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
