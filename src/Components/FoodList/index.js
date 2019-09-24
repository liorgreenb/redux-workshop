import React from "react";
import "./index.scss";
import FoodItem from '../FoodItem';

export default class FoodList extends React.Component {
  render() {
    const { foods } = this.props;
    
    return (
      <ul className="food_list">
        {foods.map(currFood => (
          <li className="food_item" key={currFood.id}>
            <FoodItem name={currFood.name} image={currFood.image}></FoodItem>
          </li>
        ))}
      </ul>
    );
  }
}
