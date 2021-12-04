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

  @OneToMany(
    () => TransferRequest,
    (transferRequest) => transferRequest.transferRequestCode,
  )
  transferRequests: TransferRequest[];
}
