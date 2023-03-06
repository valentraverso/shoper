import { DOMRoutes } from './routes/DOMRoutes.jsx';
import CartContext from './context/QuantityCartContext.jsx';
import UserContext from './context/UserContext.jsx';

function App() {
  return (
    <UserContext>
      <CartContext>
        <DOMRoutes />
      </CartContext>
    </UserContext>
  )
}

export default App