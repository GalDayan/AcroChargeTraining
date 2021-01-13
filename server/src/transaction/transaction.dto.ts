import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class TransactionDTO {
  @IsNumber()
  totalPrice: number;

  @IsString()
  currency: string;

  @IsString()
  @IsNotEmpty()
  customerId: string;
}

export type TransactionSO = {
  id: string;
  customerId: string;
  totalPrice: number;
  currency: string;
};
