import React from "react";
import { Customer } from "../types";
import useSWR from "swr"
import Axios from "axios";
import { useParams } from "react-router";
import CustomerCard from "../components/customer/Customer";
import { useStyles } from "./Demo";

const CustomerDetails = () => {
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();
    const { data } = useSWR<Customer>(id ? `/api/customer/${id}` : null, (url: string) =>
        Axios.get<Customer>(url).then(res => {
            return res.data;
        }));

    return (
        <div className={classes.demoWrapper}>
            <div style={{ height: '64px' }} />
            <div className={classes.todoListWrapper}>
                <div className={classes.title}>Customer Page</div>

                {!id && "You can view only one customer"}
                {id && !data && "Loading..."}
                {id && data && (<CustomerCard {...data} />)}
            </div>
        </div>);
}

export default CustomerDetails;