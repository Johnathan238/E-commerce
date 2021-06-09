import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStrip } from '@stripe/stripe-js'
import Review from './Review'

 
const PaymentForm = ({ checkoutToken }) => {
  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
      <Elements stripe={stripePromise}>

      </Elements>
    </div>
  )
}

export default PaymentForm
