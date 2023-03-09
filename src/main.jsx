import React from 'react'
import ReactDOM from 'react-dom/client'
import CartContext from './context/QuantityCartContext.jsx';
import UserContext from './context/UserContext.jsx';
import Router from './routes/router.jsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContext>
      <CartContext>
        <Router />
      </CartContext>
    </UserContext>
)
