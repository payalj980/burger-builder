import React from 'react';
import classes from './Burger.css';
import  BurgerIngredients from './BurgerIngredient/BurgerIngredients';

const burger = (props) => {
	return(
		<div className="Burger">
			<BurgerIngredients type="bread-top"/>
			<BurgerIngredients type="cheese"/>
			<BurgerIngredients type="sause"/>
			<BurgerIngredients type="bread-bottom"/>
		</div>


		);

};
export default burger;