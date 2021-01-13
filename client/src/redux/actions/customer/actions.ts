import { Dispatch } from 'react';

import * as types from './types';

import { Customer } from '../../../types';
import { setSnackBar } from '../ui/actions';

import * as customerAPI from '../../../api/customer';

//----- GET TODOS ----- //
const createGetCustomer = (customerId: string) => {
  return {
    type: types.GET_CUSTOMER,
    payload: customerId
  };
};

const getCustomerSuccess = (data: Customer) => {
  return {
    type: types.GET_CUSTOMER_SUCCESS,
    payload: data
  };
};

export const getCustomer = (customerId: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    dispatch(createGetCustomer(customerId));
    const res = await customerAPI.getCustomer(customerId);
    dispatch(getCustomerSuccess(res.data));
  } catch (err) {
    dispatch(catchRequestErr(err));
  }
};

const catchRequestErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.REQUEST_FAILURE,
    payload: err.message
  });
  setSnackBar({ type: 'error', msg: err.message });
};
