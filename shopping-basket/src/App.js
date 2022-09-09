import "./App.css";
import Store from "./components/store/Store";
import {Switch,Route,Redirect} from "react-router-dom"
import DetailPage from "./components/DetailPage/DetailPage";
//context
import ProductConttextProvider from "./context/ProductConttextProvider";

function App() {
  return (
    <ProductConttextProvider>
      <Switch>
      <Route path="/products/:id" component={DetailPage} />
      <Route path="/products" component={Store} />
      <Redirect to="/products" />

      </Switch>
    </ProductConttextProvider>
  );
}

export default App;
