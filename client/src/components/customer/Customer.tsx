import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
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
        maxWidth: 600,
    },
    media: {
        height: 300,
    },
});

const CustomerCard: FunctionComponent<CustomerProps> = ({ firstName, lastName, gender, country, city,
    creditCardNumber, creditCardType, customerId, email, phone, street }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${firstName} ${lastName}`}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {gender}, From {city}, <b>{country}</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}

export default CustomerCard;