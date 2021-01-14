import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { TransactionEntity } from '../transaction/transaction.entity';
import { CustomerSO } from './customer.dto';

@Entity('customers')
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
    type => TransactionEntity,
    transaction => transaction.customer,
  )
  transactions: TransactionEntity[];

  sanitizeObject = (): CustomerSO => {
    return {
      customerId: this.id,
      email: this.email,
      country: this.country,
      city: this.city,
      firstName: this.first_name,
      lastName: this.last_name,
      gender: this.gender,
      phone: this.phone,
      street: this.street,
      creditCardType: this.credit_card_type,
      creditCardNumber: this.cerdit_card_number
    };
  };
}


