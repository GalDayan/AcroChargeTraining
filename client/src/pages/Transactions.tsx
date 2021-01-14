import React, { useState, useEffect } from 'react';
import { TextField, makeStyles, Theme, Typography } from '@material-ui/core';
import TranscationsTable from '../containers/TodosTable';
import AddButton from '../components/add-button/AddButton';
import useSWR from 'swr'
import { Transaction } from '../types';
import Axios from 'axios';
import AddOrUpdateForm, { AddUpdateTransaction } from '../components/transaction/AddUpdateForm';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '3rem',
    whiteSpace: 'nowrap',
    width: '100%'
  },
  form: {
    width: '100%',
    height: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column'
  },
  formWrapper: {
    marginBottom: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  demoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.rem',
    fontWeight: 'bold',
    height: '100%',
    flexDirection: 'column'
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: ' 90%',
      padding: '0 6px 6px 6px'
    }
  },
  userLabel: {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontSize: '2rem'
  }
}));

const header = [
  { id: 'todoId', label: 'ID', minWidth: 100 },
  { id: 'totalPrice', label: 'TotalPrice', minWidth: 150 },
  { id: 'currency', label: 'Currency', minWidth: 100 },
  { id: 'customerId', label: 'Customer', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 }
];

const Demo = () => {
  const [addOrUpdateModalOpened, setAddOrUpdateModalOpened] = useState(false)
  const [editedTransaction, setEditedTransaction] = useState<AddUpdateTransaction | undefined>(undefined)

  const { data, mutate, revalidate } = useSWR<Transaction[]>('/api/transaction/', (url: string) =>
    Axios.get<Transaction[]>(url).then(res => res.data));

  const classes = useStyles();

  const deleteTransaction = (id: string) => {
    Axios.delete(`/api/transaction/${id}`).then(() => mutate((data) => data?.filter(item => item.id != id)))
  }

  const setEditingTransaction = (transaction: Transaction) => {
    setEditedTransaction({ ...transaction })
    setAddOrUpdateModalOpened(true);
  }

  const finishEditOrAddTransaction = () => {
    setAddOrUpdateModalOpened(false);
    revalidate();
  }

  useEffect(() => {
    if (!addOrUpdateModalOpened) {
      setEditedTransaction(undefined);
    }
  }, [addOrUpdateModalOpened])

  return (
    <>
      <AddOrUpdateForm {...editedTransaction} isOpened={addOrUpdateModalOpened} handleClose={finishEditOrAddTransaction} />
      <div className={classes.demoWrapper}>
        <div style={{ height: '64px' }} />
        <div className={classes.contentWrapper}>
          <div className={classes.title}>
            <Typography variant="h2">
              Your Transactions
              </Typography>
            <AddButton onClick={() => setAddOrUpdateModalOpened(true)} />
          </div>
          {!data && "Loading..."}
          {data && <TranscationsTable
            header={header}
            data={data!}
            stickyHeader={true}
            headerStyle={{ background: 'black' }}
            rowStyle={{ color: 'black', fontSize: '1.5rem' }}
            onDeleteTransaction={(id) => deleteTransaction(id)}
            onEditingTransaction={(transaction) => setEditingTransaction(transaction)}
          />
          }
        </div>
      </div>
    </>
  );
};

export default Demo;
