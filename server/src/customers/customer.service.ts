import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerSO } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  private responseObject = (customer: CustomerEntity): CustomerSO => {
    return {
      city: customer.city,
      country: customer.country,
      creditCardNumber: customer.cerdit_card_number,
      creditCardType: customer.credit_card_type,
      customerId: customer.id,
      email: customer.email,
      firstName: customer.first_name,
      gender: customer.gender,
      lastName: customer.last_name,
      phone: customer.phone,
      street: customer.street,
    };
  };

  fetchCustomer = async (customerId: string): Promise<CustomerSO> => {
    const customer = await this.customerRepository.findOne({ where: { id: customerId } });

    return this.responseObject(customer);
  };
}
