import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpErrorFilter } from './shared/http-error.filter';
import { ValidationPipe } from './shared/validation.pipe';
import { TransactionModule } from './transaction/transaction.module';
import { CustomerModule } from './customers/customer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TodoModule, UserModule, TransactionModule, CustomerModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
