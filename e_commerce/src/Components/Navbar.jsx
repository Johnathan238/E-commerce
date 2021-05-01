import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
// import classes from '*.module.css'
import logo from '../assets/I AM PRODIGY FITNESS Logo.png'
import useStyle from './Navstyle'

const Navbar = () => {
    const classes = useStyle()
    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="I AM PRODIGY FITNESS" height="25px" className={classes.image} />
                        I AM PRODIGY FITNESS
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
