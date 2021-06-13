import React, {useState} from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './Checkoutstyles'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'

const steps = ['Payment Details', 'Confim!']

// const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
// const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()

  const Confirm = () => (
    <>
     Confirm! 
    </>
  )
  
  const Form = () => activeStep == 1 ? <AddressForm  /> : <PaymentForm />
  
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout!🛒</Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          { activeStep === steps.length ? <Confirm /> : <Form /> }
        </Paper>

      </main>
    </>
  )
}

export default Checkout
