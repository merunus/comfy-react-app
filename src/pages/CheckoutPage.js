import React from 'react'
import styled from 'styled-components'
import { PageHero,} from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
  <PageHero title="checkout"/>
  <Wrapper className='page'>
     <h4>Functionality coming soon...</h4>
  </Wrapper>
  </main>
}
const Wrapper = styled.div`
h4 {
  text-align: center;
}
`
export default CheckoutPage
