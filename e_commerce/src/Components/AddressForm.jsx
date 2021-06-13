import React, { useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'
import { commerce } from '../library/commerce'



const AddressForm = () => {
    const methods = useForm()
    const [shippingCountries, setShippingCountries] = useState([])

    const fetchShippingCountires = async (checkoutTokenId) => {
        const response = await commerce.services.localeListShippingCountries(checkoutTokenId)
    }

  return (
    <>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput require name="FirstName" label="First Name"/>
                    <FormInput require name="LastName" label="Last Name"/>
                    <FormInput require name="Address" label="Address"/>
                    <FormInput require name="Email" label="Email"/>
                    <FormInput require name="City" label="City"/>
                    <FormInput require name="ZIP" label="ZIP / Postal Code"/>
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm
