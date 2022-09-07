import "./App.css";
import Store from "./components/store/Store";
//context
import ProductConttextProvider from "./context/ProductConttextProvider";

function App() {
  return (
    <ProductConttextProvider>
      <Store />
    </ProductConttextProvider>
  );
}

export default App;
