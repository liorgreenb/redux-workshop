import React from "react";
import "./index.scss";
import DEFAULT_ORDERS from "../../data/orders";
import DEFUALT_FOODS from "../../data/foods";
import FoodList from "../../Components/FoodList";

export default class OrdersListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: DEFAULT_ORDERS,
      foods: DEFUALT_FOODS
    };
  }

  getFoodById(id) {
    return this.state.foods.find(food => food.id === id);
  }

  filterOrderFoods(foodIds) {
    return this.state.foods.filter(currFood => foodIds.includes(currFood.id));
  }

  render() {
    const { orders } = this.state;

    return (
      <main className="orders_list_page">
        <h2>Existing orders</h2>
        <ul>
          {orders.map((order, id) => (
            <li key={id} className="order_item">
              <h5 className="order_header">
                #{id} - {order.name}
              </h5>
              <div>
                <h6>Foods</h6>
                <ol>
                  <FoodList foods={this.filterOrderFoods(order.foods)} />
                </ol>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
