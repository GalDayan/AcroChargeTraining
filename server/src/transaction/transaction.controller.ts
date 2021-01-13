import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('/all')
  fetchAll() {
    return this.transactionService.fetchAll();
  }

  @Delete('/:id')
  deleteTransaction(@Param('id') id: string) {
    return this.transactionService.delete(id)
  }
}
