import React from "react";
import "./index.scss";
import DEFAULT_FOODS from "../../data/foods";
import FoodList from "../../Components/FoodList";

export default class AddFoodPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: DEFAULT_FOODS
    };
  }

  render() {
    const { foods } = this.state;

    return (
      <main className="add_food_page">
        <section>
          <h2>Add New Food</h2>
          <form>
            <label>
              <span className="input_label">Food name:</span>
              <input className="food_name"></input>
            </label>
            <label>
              <span className="input_label">Food image:</span>
              <input className="food_image"></input>
            </label>
            <button className="submit_new_food" type="button">
              Add food
            </button>
          </form>
        </section>
        <section className="food_list_section">
          <h3>Food list</h3>
          <FoodList foods={foods} />
        </section>
      </main>
    );
  }
}
