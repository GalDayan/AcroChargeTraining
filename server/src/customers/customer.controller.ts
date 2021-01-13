import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private transactionService: CustomerService) {}

  @Get('/:id')
  fetchCustomer(@Param('id') id: string) {
    return this.transactionService.fetchCustomer(id);
  }
}
