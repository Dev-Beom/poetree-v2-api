<<<<<<< HEAD:src/domains/photos/entities/photo.entity.ts
import { Category } from 'src/domains/categories/entities/category.entity';
import { Post } from 'src/domains/posts/entities/post.entity';
=======
import { Category } from 'src/entities/category.entity';
import { Post } from 'src/entities/post.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/photo.entity.ts
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'poetree', name: 'photos' })
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column('int', { name: 'categoryId', nullable: true })
  categoryId: number | null;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', length: 200 })
  imageUrl: string;

  @Column({ type: 'date' })
  uploadDate: string;

  @Column()
  encoding: string;

  @Column()
  mimeType: string;

  @Column('decimal', { precision: 10, scale: 2 })
  size: number;

  @Column({ type: 'boolean', default: 0 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.photos, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  category: Category;

  @OneToMany(() => Post, (post) => post.photo)
  posts: Post[];
}
