import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CustomerEntity } from 'src/customers/customer.entity';

@Entity('transcations')
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'double',
  })
  total_price: number;

  @Column({
    type: 'string',
  })
  currency: string;

  @ManyToOne(
    type => CustomerEntity,
    author => author.transactions,
  )
  customer: CustomerEntity;
}
