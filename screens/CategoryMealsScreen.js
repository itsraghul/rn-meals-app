import React from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((c) => c.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
