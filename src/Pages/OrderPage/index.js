import React from "react";
import "./index.scss";
import FoodItem from "../../Components/FoodItem";
import DEFAULT_FOODS from "../../data/foods";
import classNames from "classnames";

export default class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: DEFAULT_FOODS,
      orderFoodState: {}
    };
  }

  toggleFoodState(foodId) {
    const previousState = this.state.orderFoodState;
    const previousFoodState = this.state.orderFoodState[foodId];

    this.setState({
      orderFoodState: { ...previousState, [foodId]: !previousFoodState }
    });
  }

  renderSelectableFood(food) {
    const { id, name, image } = food;
    const isSelected = this.state.orderFoodState[id];

    return (
      <li
        key={id}
        className={classNames("selectable_food", isSelected && "selected")}
      >
        <FoodItem
          name={name}
          image={image}
          onClick={() => this.toggleFoodState(id)}
        />
      </li>
    );
  }

  render() {
    const { foods } = this.state;

    return (
      <main className="order_page">
        <h2>Order</h2>
        <section>
          <form>
            <label className="order_input_container">
              <span className="label_text">Name:</span>
              <input className="name_input"></input>
            </label>
            <label className="order_input_container">
              <span>Foods:</span>
              <ul>{foods.map(food => this.renderSelectableFood(food))}</ul>
            </label>
          </form>
          <button>Submit order</button>
        </section>
      </main>
    );
  }
}
