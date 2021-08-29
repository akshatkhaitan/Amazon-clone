import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./Checkout"
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51JT8wpSEKT5J7DlC3UaRv9KZpzeIO8B6splIEHxiVFOScdqMtPBcaJEYwXTIytm9Ee0EHdhmVQGXXkpe2hu9twKQ00jZfJdLWu"
);

function App() {
  const [user, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
        <Route path="/checkout">          
						<Checkout/>
					</Route>
          <Route path="/orders">
            <Orders />
          </Route>
					<Route path="/login">
						<Login />
					</Route>
          <Route path="/payment">
          <Elements stripe={promise}>
              <Payment />
            </Elements>
					</Route>
					<Route path="/">
						<Home />
					</Route>
          
				</Switch>
			</Router>
		</div>
	);
}

export default App;
