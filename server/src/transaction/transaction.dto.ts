import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { CustomerSO } from 'src/customers/customer.dto';

export class TransactionDTO {
  @IsNumber()
  totalPrice: string;

  @IsString()
  currency: string;
}

export type TransactionSO = {
  id: string;
  customer: CustomerSO;
  token?: string;
};
