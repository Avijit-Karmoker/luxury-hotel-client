import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext } from "react/cjs/react.production.min";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddRooms from "./components/Dashboard/AddRooms/AddRooms";
import AllRoom from "./components/RoomDetails/AllRoom/AllRoom";
import OrderDetails from "./components/OrderDetails/OrderDetails/OrderDetails";
import AddAAdmin from "./components/Admin/AddAAdmin/AddAAdmin";
import ReviewInfo from "./components/ReviewInfo/ReviewInfo";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ReviewInfo />
          </PrivateRoute>
          <PrivateRoute path="/addAAdmin">
            <AddAAdmin />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddRooms />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/rooms">
            <AllRoom />
          </Route>
          <PrivateRoute path="/orderDetails/:id">
            <OrderDetails />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
