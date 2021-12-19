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
<<<<<<< HEAD:src/domains/hashtags/entities/hashtag.entity.ts
import { PostHashtag } from 'src/domains/post-hashtags/entities/postHashtag.entity';
=======
import { PostHashtag } from 'src/entities/postHashtag.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/hashtag.entity.ts

@Entity({ schema: 'poetree', name: 'hashtags' })
export class Hashtag extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  tag: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PostHashtag, (postHashtag) => postHashtag.hashtag)
  postHashtags: PostHashtag;
}
