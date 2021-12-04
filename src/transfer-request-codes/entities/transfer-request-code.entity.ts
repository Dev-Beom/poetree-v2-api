import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransferRequest } from 'src/transfer-requests/entities/transfer-request.entity';

@Entity({ schema: 'crow', name: 'transferRequestCodes' })
export class TransferRequestCode extends BaseEntity {
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

  @OneToMany(
    () => TransferRequest,
    (transferRequest) => transferRequest.transferRequestCode,
  )
  transferRequests: TransferRequest[];
}
