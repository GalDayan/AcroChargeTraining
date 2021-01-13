import { CSSProperties } from 'react';

export type UserCreds = {
  email: string;
  password: string;
};

export type Transaction = {
  id: string;
  customerId: string;
  totalPrice: number;
  currency: string;
};

export type Customer = {
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

export type TransactionTableHeader = {
  id: string;
  label: string;
  minWidth: number;
};

export type CurrentUser = {
  id: string;
  createdOn: Date;
  email: string;
  token?: string;
};

export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined;

export type SnackBarAlert = {
  type: AlertType;
  msg: string;
};

export type HeaderStyle = CSSProperties;
export type RowStyle = CSSProperties;

export type Action = {
  type: string;
  payload: any;
};

export interface ITransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  err: any;
}

export interface IStore {
  transaction: ITransactionState;
  ui: IUiState;
  auth: IAuth;
}

export interface IUiState {
  snackbar: SnackBarAlert;
}

export interface IAuth {
  currentUser: CurrentUser | null;
  err: any;
  isLoading: boolean;
}

export interface TransactionTable {
  data: Transaction[];
  header: TransactionTableHeader[];
  stickyHeader: boolean;
  headerStyle?: HeaderStyle;
  rowStyle?: RowStyle;
  onDeleteTransaction: (id: string) => void;
  onEditingTransaction: (transaction: Transaction) => void;
}
