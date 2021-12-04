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
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 30 })
  code: string;

  @Column({ type: 'varchar', length: 30 })
  name: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => FundRequest, (fundRequest) => fundRequest.fundRequestCode)
  fundRequests: FundRequest[];
}
