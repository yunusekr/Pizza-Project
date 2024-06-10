import "./App.css";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router";
import OrderPage from "./OrderPage";

function App() {
  return (
    <>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/order">
        <OrderPage />
      </Route>
    </>
  );
}

export default App;
