import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD:src/domains/categories/entities/category.entity.ts
import { Post } from 'src/domains/posts/entities/post.entity';
import { Photo } from 'src/domains/photos/entities/photo.entity';
=======
import { Post } from 'src/entities/post.entity';
import { Photo } from 'src/entities/photo.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/category.entity.ts

@Entity({ schema: 'poetree', name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  code: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];

  @OneToMany(() => Photo, (photo) => photo.category)
  photos: Photo[];
}
