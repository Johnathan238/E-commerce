import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import classes from '*.module.css'

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length

    const EmptyCart = () => {
        <Typography variant="subtitle2">No items in your shopping cart!</Typography>
    }

    const FilledCart = () => {
        <>
        <Grid container spacing={3}>
            {cart.line_items((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                    
                </Grid>
            ))}
        </Grid>

        <div className={classes.cardDetails}>
            <Typography>
                Subtotal: {cart.subtotal}
            </Typography>

        </div>
        </>
    }
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart

