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
import { Category } from 'src/entities/category.entity';
import { PostHashtag } from 'src/entities/postHashtag.entity';
import { User } from 'src/entities/user.entity';
import { PostLike } from 'src/entities/post-like.entity';
import { Comment } from 'src/entities/comment.entity';
import { Photo } from 'src/entities/photo.entity';

@Entity({ schema: 'poetree', name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column('text')
  content: string;

  @Column({ type: 'int', default: 0 })
  views: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @ManyToOne(() => Photo, (photo) => photo.posts)
  photo: Photo;

  @OneToMany(() => PostHashtag, (postHashtag) => postHashtag.post)
  postHashtags: PostHashtag;

  @OneToMany(() => PostLike, (postLike) => postLike.post)
  postLikes: PostLike[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
