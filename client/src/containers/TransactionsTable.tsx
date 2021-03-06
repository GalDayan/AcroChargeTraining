import React, { FC } from 'react';
import { Paper, Table, TableContainer, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TransactionTable } from '../types';
import TableHeader from '../components/header/Header';
import Row from '../components/row/Row';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  container: {
    maxHeight: '100%',
    scrollBehavior: 'smooth',
    overflow: 'auto'
  }
});
const TranscationsTable: FC<TransactionTable> = ({
  data,
  header,
  headerStyle,
  rowStyle,
  onDeleteTransaction,
  onEditingTransaction,
  stickyHeader = true
}) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} elevation={6}>
      <Table
        stickyHeader={stickyHeader}
        style={{ maxHeight: '100%' }}
        aria-label="sticky table"
      >
        <TableHeader data={header} headerStyle={headerStyle} />
        <TableBody>
          {data.map((transaction) => {
            return (
              <Row
                data={transaction}
                rowStyle={rowStyle}
                onDeleteTransaction={(id) => onDeleteTransaction(id)}
                onEditingTransaction={(transaction) => onEditingTransaction(transaction)}
              />
            );
          })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TranscationsTable;
