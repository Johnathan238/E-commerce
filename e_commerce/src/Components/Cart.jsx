import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import classes from '*.module.css'

const Cart = () => {
    const isEmpty = true;

    
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} varaint="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCard /> : <FilledCart />}
        </Container>
    )
}

export default Cart

