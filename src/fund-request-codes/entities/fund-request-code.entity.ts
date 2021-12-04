import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FundRequest } from 'src/fund-requests/entities/fund-request.entity';

@Entity({ schema: 'crow', name: 'fundRequestCode' })
export class FundRequestCode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => FundRequest, (fundRequest) => fundRequest.fundRequestCode)
  fundRequests: FundRequest[];
}
