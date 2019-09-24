import React from "react";
import "./App.scss";
import AddFoodPage from "./Pages/AddFoodPage";
import OrderPage from "./Pages/OrderPage";
import OrdersListPage from "./Pages/OrdersListPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const ADD_FOOD = "ADD_FOOD";
const ORDER = "ORDER";
const ORDER_LIST = "ORDER_LIST";

const PAGES = {
  [ORDER]: {
    title: "Order",
    component: OrderPage,
    route: "/order"
  },
  [ORDER_LIST]: {
    title: "Orders List",
    component: OrdersListPage,
    route: "/order-list"
  },
  [ADD_FOOD]: {
    title: "Add Food",
    component: AddFoodPage,
    route: "/add-food"
  }
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>
              GiveBite
            </h1>
            <nav>
              <ul onChange={this.onPageChange}>
                {Object.keys(PAGES).map(currPageId => (
                  <li
                    key={currPageId}
                  >
                    <NavLink className="nav_item" to={PAGES[currPageId].route} activeClassName="active">
                      {PAGES[currPageId].title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className="page_container">
            {Object.values(PAGES).map(page => (
              <Route key={page.route} path={page.route} component={page.component} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
