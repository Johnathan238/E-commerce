import React from 'react'
import { Typography,  Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyle from './styles'

export const CartItem = () => {
    const classes = useStyle();

    return (
        <Card>
            <CardMedia image={item.media.source} />
            
        </Card>
    )
}
