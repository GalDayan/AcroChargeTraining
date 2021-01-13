import { IsString, IsNumber } from 'class-validator';

export class TransactionDTO {
  @IsNumber()
  totalPrice: string;

  @IsString()
  currency: string;
}

export type TransactionSO = {
  id: string;
  customerId: text;
  totalPrice: number;
  currency: string;
  token?: string;
};
