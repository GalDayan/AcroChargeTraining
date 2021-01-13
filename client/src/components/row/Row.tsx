import React, { FC } from 'react';
import { TableRow, TableCell, Checkbox, makeStyles } from '@material-ui/core';
import DeleteButton from '../delete-button/DeleteButton';
import { Transaction, RowStyle } from '../../types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  contentTableCell: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  deleteButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Row: FC<{
  data: Transaction;
  rowStyle?: RowStyle;
  onDeleteTransaction: (
    id: string
  ) => void;
}> = ({ data, rowStyle = {}, onDeleteTransaction }) => {
  const { currency, customerId, id, totalPrice } = data;
  const classes = useStyles();

  return (
    <TableRow
      style={rowStyle}
      hover
      tabIndex={-1}
      key={`${id}`}
    >
      <TableCell>
        <div>{id}</div>
      </TableCell>
      <TableCell>
        <div>{totalPrice}</div>
      </TableCell>
      <TableCell>
        <div>{currency}</div>
      </TableCell>
      <TableCell>
        <Link to={`/customer/${customerId}`} target="_blank">{customerId}</Link>
      </TableCell>
      <TableCell>
        <div className={classes.deleteButtonWrapper}>
          <DeleteButton onClick={() => onDeleteTransaction(data.id)} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
