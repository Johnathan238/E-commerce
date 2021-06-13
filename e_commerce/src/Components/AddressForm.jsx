import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'


const AddressForm = () => {
    const methods = useForm()

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
