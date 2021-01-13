import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { TransactionEntity } from 'src/transaction/transaction.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryColumn({type: 'text'})
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column('text')
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  gender: string;

  @Column('text')
  country: string;

  @Column('text')
  city: string;

  @Column('text')
  street: string;
  
  @Column('text')
  phone: string;
  
  @Column('text')
  credit_card_type: string;
  
  @Column('text')
  cerdit_card_number: string;

  @OneToMany(
    () => TransactionEntity,
    transaction => transaction.customer,
  )
  transactions: TransactionEntity[];
}


