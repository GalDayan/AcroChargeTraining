import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TransactionDTO } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('/')
  fetchAll() {
    return this.transactionService.fetchAll();
  }

  @Delete('/:id')
  deleteTransaction(@Param('id') id: string) {
    return this.transactionService.delete(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addTransaction(@Body() transaction: Partial<TransactionDTO>) {
    return this.transactionService.createTransaction(transaction);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  updateTransaction(
    @Param('id') id: string,
    @Body() transaction: Partial<TransactionDTO>,
  ) {
    return this.transactionService.updateTransaction(id, transaction);
  }
}
