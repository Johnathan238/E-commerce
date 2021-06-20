import React, {useState, useEffect} from 'react'
import { commerce } from '../library/commerce'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './Checkoutstyles'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'

const steps = ['Payment Details', 'Confim!']

// const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
// const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

const Checkout = ({cart}) => {

  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})

        console.log(token);
        setCheckoutToken(token)
      } catch (error) {

      }
    }

    generateToken()
  }, [cart])

  const Confirm = () => (
    <>
     Confirm! 
    </>
  )
  
  const Form = () => activeStep === 0 
  ? <AddressForm  checkoutToken={checkoutToken}/> 
  : <PaymentForm />
  
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
          { activeStep === steps.length ? <Confirm /> : checkoutToken && <Form /> }
        </Paper>

      </main>
    </>
  )
}

export default Checkout
