import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
  import { CustomerEntity } from 'src/customers/customer.entity';

@Entity('transcations')
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'integer',
  })
  total_price: number;

  @Column({
    type: 'text',
  })
  currency: string;

  @ManyToOne(
    type => CustomerEntity,
    customer => customer.transactions,
  )
  customer: CustomerEntity;
}
