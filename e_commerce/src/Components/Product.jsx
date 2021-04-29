import React from 'react'
import { Card,  CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import classes from '*.module.css'

export const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={Product.name} />

            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {Product.name}
            </Typography>

            <Typography variant="h5">
                        {Product.price}
            </Typography>
            
          </div>
          
          <Typography variant="h5">
                        {Product.description}
          </Typography>
          
            </CardContent>

        </Card>
    )
}
