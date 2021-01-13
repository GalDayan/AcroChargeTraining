import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class UserDTO {
  @IsNumber()
  customerId: string;

  @IsString()
  firstName: string;
  
  @IsString()
  lastName: string;
  
  @IsEmail()
  email: string;

  @IsString()
  gender: string;
 
  @IsString()
  country: string;
  
  @IsString()
  city: string;
  
  @IsString()
  street: string;
  
  @IsString()
  phone: string;
  
  @IsString()
  creditCardType: string;

  @IsNumber()
  creditCardNumber: string;
}

export type CustomerSO = {
  customerId: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  city: string;
  street: string;
  phone: string;
  creditCardType: string;
  creditCardNumber: string;
};
