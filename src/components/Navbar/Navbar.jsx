import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
// import classes from '*.module.css'
import logo from '../assets/I AM PRODIGY FITNESS Logo.png'
import useStyle from './Navstyle'

const Navbar = ({ totalItems }) => {
    const classes = useStyle()
    const location = useLocation()

    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="I AM PRODIGY FITNESS" height="25px" className={classes.image} />
                        I AM PRODIGY FITNESS
                    </Typography>

                    <div className={classes.grow} />
                    { location.pathname === "/" && (
                    
                    <div className={classes.button} >
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </div>)}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar


