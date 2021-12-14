import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostHashtag } from 'src/post-hashtags/entities/postHashtag.entity';
@Entity({ schema: 'poetree', name: 'hashtags' })
export class Hashtag extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  tag: string;

  @Column({ type: 'varchar', length: 30 })
  name: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PostHashtag, (postHashtag) => postHashtag.hashtag)
  postHashtags: PostHashtag;
}
