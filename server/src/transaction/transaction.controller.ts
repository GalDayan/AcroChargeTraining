import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('/all')
  fetchAll() {
    console.log("UFCK")
    return this.transactionService.fetchAll();
  }
}
