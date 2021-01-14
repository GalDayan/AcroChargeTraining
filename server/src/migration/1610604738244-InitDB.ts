import { CustomerEntity } from '../customers/customer.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { TransactionEntity } from '../transaction/transaction.entity';
const dataFile = require('./files/data.json');

export class InitCustomers1610604738244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.initCustomers(queryRunner);
    await this.initTransactions(queryRunner);
  }

  private async initCustomers(queryRunner: QueryRunner) {
    const customerRepo = queryRunner.connection.getRepository(CustomerEntity);

    const customers: CustomerEntity[] = dataFile.map(
      ({
        customer_id,
        first_name,
        last_name,
        email,
        gender,
        city,
        country,
        street,
        phone,
        cerdit_card_type,
        cerdit_card_number,
      }) => {
        return {
          id: customer_id,
          email,
          first_name,
          last_name,
          gender,
          city,
          country,
          street,
          phone,
          cerdit_card_number,
          credit_card_type: cerdit_card_type,
        };
      },
    );

    await customerRepo.insert(customers);
  }

  private async initTransactions(queryRunner: QueryRunner) {
    const transactionsRepo = queryRunner.connection.getRepository(
      TransactionEntity,
    );

    const transactions: TransactionEntity[] = dataFile.map(
      ({ customer_id, total_price, currency }) => {
        return {
          customer: {id: customer_id},
          total_price,
          currency,
        };
      },
    );

    await transactionsRepo.insert(transactions);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const customerRepo = queryRunner.connection.getRepository(CustomerEntity);
    const transactionRepo = queryRunner.connection.getRepository(
      TransactionEntity,
    );
    await transactionRepo.delete({});
    await customerRepo.delete({});
  }
}
