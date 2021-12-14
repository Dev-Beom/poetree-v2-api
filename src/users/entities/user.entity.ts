import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Like,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlockedUser } from 'src/blocked-users/entities/blocked-user.entity';
import { UnregisteredUser } from 'src/unregistered-users/entities/unregistered-user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Follow } from 'src/follows/entities/follow.entity';
import { PostLike } from 'src/post-likes/entities/post-like.entity';
import { Comment } from 'src/comments/entities/comment.entity';
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @ManyToOne(
    () => UnregisteredUser,
    (unregisteredUser) => unregisteredUser.users,
    { nullable: true },
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
