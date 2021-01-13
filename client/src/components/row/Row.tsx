import React, { FC } from 'react';
import { TableRow, TableCell, Checkbox, makeStyles } from '@material-ui/core';
import DeleteButton from '../delete-button/DeleteButton';
import { Transaction, RowStyle } from '../../types';

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
  onCompleteTodo: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    id: string
  ) => void;
  onDeleteTodo: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => void;
}> = ({ data, rowStyle = {}, onDeleteTodo, onCompleteTodo }) => {
  const { currency, customerId, id, totalPrice } = data;
  const classes = useStyles();

  return (
    <TableRow
      style={rowStyle}
      hover
      tabIndex={-1}
      key={`${id}`}
    >
      <TableCell className={classes.contentTableCell}>
        <div>{id}</div>
      </TableCell>
      <TableCell>
        <div>{totalPrice}</div>
      </TableCell>
      <TableCell>
        <div>{currency}</div>
      </TableCell>
      <TableCell>
        <div>{customerId}</div>
      </TableCell>
      <TableCell>
        <div className={classes.deleteButtonWrapper}>
          <DeleteButton onClick={(e) => onDeleteTodo(e, data.id)} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
