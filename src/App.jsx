import CartContext from './context/QuantityCartContext.jsx';
import UserContext from './context/UserContext.jsx';
import Router from './routes/router.jsx';

function App() {
  return (
    <UserContext>
      <CartContext>
        <Router />
      </CartContext>
    </UserContext>
  )
}

export default App