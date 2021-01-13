import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { TransactionSO } from './transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
  ) {}

  private responseObject = (transaction: TransactionEntity): TransactionSO => {
    return {
      id: transaction.id,
      totalPrice: transaction.total_price,
      currency: transaction.currency,
      customerId: transaction.customer.id,
    };
  };

  fetchAll = async (): Promise<TransactionSO[]> => {
    const transactions = await this.transactionRepository.find({
      relations: ['customer'],
    });
    return transactions.map(transaction => {
      return this.responseObject(transaction);
    });
  };

  delete = async (id: string): Promise<DeleteResult> => {
    return await this.transactionRepository.delete({ id: id });
  };
}
