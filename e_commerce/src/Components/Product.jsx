import React from 'react'
import { Card,  CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import classes from '*.module.css'
import useStyles from './styles'

export const Product = ({ product }) => {
    const classes = useStyles()
    
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
          
          <Typography variant="h2" color="textSecondary">
                        {Product.description}
          </Typography>

            </CardContent>

            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart"></IconButton>
                <AddShoppingCart />
            </CardActions>

        </Card>

    )
}
