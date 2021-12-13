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
import { Category } from 'src/categories/entities/category.entity';
import { HashtagsController } from 'src/hashtags/hashtags.controller';
import { PostHashtag } from 'src/post-hashtags/entities/postHashtag.entity';
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
  name: number;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;

  @OneToMany(() => PostHashtag, (postHashtag) => postHashtag.post)
  postHashtags: PostHashtag;
}
