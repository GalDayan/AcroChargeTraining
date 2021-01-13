import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { TransactionDTO, TransactionSO } from './transaction.dto';
import { CustomerEntity } from 'src/customers/customer.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
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

  createTransaction = async (
    transaction: Partial<TransactionDTO>,
  ): Promise<TransactionSO> => {
    const customer = await this.getCustomer(transaction.customerId);

    const newTransaction = this.transactionRepository.create({
      currency: transaction.currency,
      total_price: transaction.totalPrice,
      customer: customer,
    });
    await this.transactionRepository.save(newTransaction);

    return this.responseObject(newTransaction);
  };

  updateTransaction = async (
    id: string,
    newTransaction: Partial<TransactionDTO>,
  ): Promise<TransactionSO> => {
    const transaction = await this.getTransaction(id);

    if (!transaction)
      throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);

    if (newTransaction.customerId) {
      const customer = await this.getCustomer(newTransaction.customerId);
      await this.transactionRepository.update({ id }, { customer });
    }

    if (newTransaction.customerId) {
      await this.transactionRepository.update(
        { id },
        { currency: newTransaction.currency },
      );
    }

    if (newTransaction.totalPrice) {
      await this.transactionRepository.update(
        { id },
        { total_price: newTransaction.totalPrice },
      );
    }

    return this.responseObject(await this.getTransaction(id));
  };

  private async getCustomer(customerId: string) {
    const customer = await this.customerRepository.findOne({
      where: { id: customerId },
    });

    if (!customer)
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);

    return customer;
  }

  private async getTransaction(id: string) {
    return await this.transactionRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }
}
