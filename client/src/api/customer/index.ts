import axios from 'axios';

export const getCustomer = async (customerId: string) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/api/customer/${customerId}`
    });
    return res;
  } catch (err) {
    throw new Error(err.response?.data.message);
  }
};