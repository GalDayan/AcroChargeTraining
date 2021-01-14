import { Button, Card, CardActions, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";
import { Email, Phone } from "@material-ui/icons";
import React, { FunctionComponent } from "react";

export interface CustomerProps {
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
}

const useStyles = makeStyles({
    root: {
        minWidth: 600,
    },
    media: {
        height: 300,
    },
});

const CustomerCard: FunctionComponent<CustomerProps> = ({ firstName, lastName, gender, country, city,
    creditCardNumber, creditCardType, email, phone, street }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {`${firstName} ${lastName}`}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {gender}, From {street}, {city}, <b>{country}</b>
                </Typography>

                <Divider />
                <Typography variant="caption">
                    {creditCardNumber}, {creditCardType}
                </Typography>
            </CardContent>

            <CardActions>
                <Button>
                    <Phone fontSize="small" color="primary" />
                    {phone}
                </Button>
                <Button>
                    <Email fontSize="small" color="primary" />
                    {email}
                </Button>
            </CardActions>
        </Card>
    )
}

export default CustomerCard;