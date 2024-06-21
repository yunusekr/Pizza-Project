import "./App.css";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import OrderPage from "./OrderPage";
import OrderCompletedPage from "./OrderCompletedPage";

function App() {
  return (
    <>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/order">
        <OrderPage />
      </Route>
      <Route path="/accepted">
        <OrderCompletedPage />
      </Route>
    </>
  );
}

export default App;
