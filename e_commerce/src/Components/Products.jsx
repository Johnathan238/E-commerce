import React from 'react'
import Grid from '@material-ui/core'

const products = [
    { id:1, name:'Shoes', description:'Running Shoes' },
    { id:2, name:'Pants', description:'Vlone Pants' }
];

const Products = () => {
    <main>

        <Grid container justify="center"spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id}>
            ))}

        </Grid>

    </main>
}

export default Products

