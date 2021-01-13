import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO, UserSO } from './user.dto';
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
      ...transaction,
      customer: transaction.customer.sanitizeObject(),
    };
  };

  fetchAll = async (): Promise<TransactionSO[]> => {
    const transactions = await this.transactionRepository.find();
    return transactions.map(transaction => {
      return this.responseObject(transaction);
    });
  };
}
