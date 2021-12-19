import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  Like,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD:src/domains/users/entities/user.entity.ts
import { BlockedUser } from 'src/domains/blocked-users/entities/blocked-user.entity';
import { UnregisteredUser } from 'src/domains/unregistered-users/entities/unregistered-user.entity';
import { Post } from 'src/domains/posts/entities/post.entity';
import { Follow } from 'src/domains/follows/entities/follow.entity';
import { PostLike } from 'src/domains/post-likes/entities/post-like.entity';
import { Comment } from 'src/domains/comments/entities/comment.entity';
=======
import { BlockedUser } from 'src/entities/blocked-user.entity';
import { UnregisteredUser } from 'src/entities/unregistered-user.entity';
import { Post } from 'src/entities/post.entity';
import { Follow } from 'src/entities/follow.entity';
import { PostLike } from 'src/entities/post-like.entity';
import { Comment } from 'src/entities/comment.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/entities/user.entity.ts
@Entity({ schema: 'poetree', name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 30 })
  name: string;

  @Column('varchar', { unique: true, length: 30 })
  email: string;

  @Column('varchar', { length: 100, nullable: true })
  password: string;

  @Column('int', { unique: true, nullable: true })
  phone: number;

  @Column('varchar', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('varchar', { default: 'local' })
  loginProvider: string;

  @Column('varchar', { length: 200, nullable: true })
  imageUrl: string;

  @Column('int', { default: 0 })
  point: number;

  @Column('boolean', { default: false })
  isBlocked: boolean;

  @Column({ default: false })
  isPush: boolean;

  @Column('int', { name: 'unregisteredUserId', nullable: true })
  unregisteredUserId: number | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @ManyToOne(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.users,
    {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  )
  unregisteredUser: UnregisteredUser;

  @OneToMany(() => Follow, (follow) => follow.follower)
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.following)
  followings: Follow[];

  @OneToMany(() => BlockedUser, (blockedUser) => blockedUser.user)
  blockedUsers: BlockedUser[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.user,
    { nullable: true },
  )
  unregisteredUsers: UnregisteredUser[];

  @OneToMany(() => PostLike, (postLike) => postLike.user)
  postLikes: PostLike[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
