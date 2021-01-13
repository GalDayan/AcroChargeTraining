import * as types from '../actions/transaction/types';

import { ITransactionState, Action } from '../../types';

const initialState: ITransactionState = {
  transactions: [],
  isLoading: true,
  err: null
};

export const transactionReducer = (
  state = initialState,
  action: Action
): ITransactionState => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      return {
        ...state
      };
    case types.ADD_TODO:
      return {
        ...state
      };
    case types.DELETE_TODO:
      return {
        ...state
      };
    case types.GET_ALL_TRANSACTIONS:
      return {
        ...state,
        isLoading: true
      };
    case types.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        isLoading: false,
        err: null
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions.filter((item) => item.id !== action.payload)],
        isLoading: false,
        err: null
      };
    case types.GET_ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false,
        err: null
      };
    case types.CLEAR_TRANSACTIONS:
      return {
        transactions: [],
        isLoading: true,
        err: null
      };
    default:
      return state;
  }
};
