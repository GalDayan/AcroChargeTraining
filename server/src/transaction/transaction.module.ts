import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { CustomerEntity } from 'src/customers/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity, CustomerEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
