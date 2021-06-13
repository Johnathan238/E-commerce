import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useFrom, FormProvider } from 'react-hook-form'


const AddressForm = () => {
    const methods = useForm()

  return (
    <>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <FormProvider {...methods}>

        </FormProvider>
    </>
  )
}

export default AddressForm
