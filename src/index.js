import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// domain dev-os77ropz.us.auth0.com 
// cliend id 7WPnLvRh4u49YBcM119449TteF843zsx


ReactDOM.render(
    <Auth0Provider
        domain="dev-os77ropz.us.auth0.com"
        clientId='7WPnLvRh4u49YBcM119449TteF843zsx'
        redirectUri={"https://merunus.github.io/comfy-react-app"}
        cacheLocation="localstorage" >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider> 
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root'))
