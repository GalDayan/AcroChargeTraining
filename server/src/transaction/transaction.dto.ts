import { IsString, IsNumber } from 'class-validator';

export class TransactionDTO {
  @IsNumber()
  totalPrice: number;

  @IsString()
  currency: string;

  @IsString()
  customerId: string;
}

export type TransactionSO = {
  id: string;
  customerId: string;
  totalPrice: number;
  currency: string;
};
