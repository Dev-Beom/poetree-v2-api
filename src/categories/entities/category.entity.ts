import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Item } from 'src/items/entities/item.entity';

@Entity({ schema: 'crow', name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: number;

  @Column({ default: 1 })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
}
