import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core"
import Axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export interface AddUpdateTransaction {
    id?: string;
    customerId?: string;
    totalPrice?: number;
    currency?: string;
}

export interface AddOrUpdateFormProps extends AddUpdateTransaction {
    handleClose: () => void;
    isOpened: boolean;
}

const isUpdating = (id?: string) => !!id;

const AddOrUpdateForm: React.FC<AddOrUpdateFormProps> = ({
    id, currency, customerId, totalPrice, handleClose, isOpened
}) => {
    const { register, handleSubmit } = useForm<AddUpdateTransaction>();
    const onSubmit = (data: AddUpdateTransaction) => {
        const updateOrCreatePromise = isUpdating(id) ?
            Axios.patch(`/api/transaction/${id}`, { ...data }) :
            Axios.post(`/api/transaction/`, { ...data })
        updateOrCreatePromise
            .then(() => {
                alert('Great, worked')
                handleClose();
            })
            .catch((err) => alert(`Oops, ${err.response.data.message}`));
    }

    return (<>
        <Dialog open={isOpened} onClose={handleClose}>
            <DialogTitle id="form-dialog-title">
                {isUpdating(id) ? `Update ${id}` : 'Add new transaction'}
            </DialogTitle>
            <DialogContent>
                <TextField
                    inputRef={register({ required: true })}
                    defaultValue={customerId}
                    autoFocus
                    margin="dense"
                    name="customerId"
                    label="Customer Id"
                    type="text"
                    fullWidth
                />
                <TextField
                    inputRef={register({ required: true })}
                    defaultValue={currency}
                    margin="dense"
                    id="name"
                    name="currency"
                    label="Currency"
                    type="text"
                    fullWidth
                />
                <TextField
                    inputRef={register({ required: true })}
                    defaultValue={totalPrice}
                    margin="dense"
                    name="totalPrice"
                    label="Total Price"
                    type="number"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit(onSubmit)} color="primary">
                    {isUpdating(id) ? 'Update' : 'Create'}
                </Button>
            </DialogActions>
        </Dialog>
    </>);
}

export default AddOrUpdateForm