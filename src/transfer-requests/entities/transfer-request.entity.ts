import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransferRequestCode } from 'src/transfer-request-codes/entities/transfer-request-code.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ schema: 'crow', name: 'transferRequests' })
export class TransferRequest extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.transferRequests)
  user: User;

  @ManyToOne(
    () => TransferRequestCode,
    (transferRequestCode) => transferRequestCode.transferRequests,
  )
  transferRequestCode: TransferRequestCode;
}
