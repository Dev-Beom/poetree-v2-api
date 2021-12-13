import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';

@Entity({ schema: 'crow', name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  code: string;

  @Column({ type: 'varchar', length: 30 })
  name: number;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
