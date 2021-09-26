import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { GlobalStyles } from "./styles";
import Home from "./screens/Home";
import ProductInfo from "./screens/ProductInfo";
import Products from "./screens/Products";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product-info">
            <ProductInfo />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
