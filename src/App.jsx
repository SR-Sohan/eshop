import AppRouting from "./AppRouting";
import { CartProvider } from "./cart/CartProvider";

const App = ()  => <CartProvider><AppRouting/></CartProvider>

export default App
