import { DOMRoutes } from './routes/DOMRoutes.jsx';
import CartContext from './context/QuantityCartContext.jsx';

function App() {
  return (
    <CartContext>
      <DOMRoutes />
    </CartContext>
  )
}

export default App