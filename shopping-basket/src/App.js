import "./App.css";
import Store from "./shared/store/Store";
import { Switch, Route, Redirect } from "react-router-dom";
import DetailPage from "./components/DetailPage/DetailPage";
import ShopCart from "./shared/ShopCart/ShopCart";
//context
import CartContextProvider from "./context/CartContextProvider";
import ProductConttextProvider from "./context/ProductConttextProvider";
import MainNavbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <ProductConttextProvider>
      <CartContextProvider>
        <MainNavbar/>
        <Switch>
          <Route path="/products/:id" component={DetailPage} />
          <Route path="/products" component={Store} />
          <Route path="/carts" component={ShopCart} />
          
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductConttextProvider>
  );
}

export default App;
