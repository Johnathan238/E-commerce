import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product'

const products = [
    { id:1, name:'Shoes', description:'Nike x Acrynom', price:'$50.00', image: 'https://images.unsplash.com/photo-1558004282-daef63d6ac9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80'},
    { id:2, name:'Shirt', description:'Vlone Shirt', price:'$100.00' , image: 'https://images.unsplash.com/photo-1584985839340-d95cbff1ed2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80'}
];

const Products = () => {
    return(
    <main>

        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}

        </Grid>

    </main>

    )
}

export default Products

