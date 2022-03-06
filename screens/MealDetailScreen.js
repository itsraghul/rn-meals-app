import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const curFavoriteMeals = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: curFavoriteMeals });
  }, [curFavoriteMeals]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Incredients</Text>
      {selectedMeal.ingredients.map((inc) => {
        return (
          <Text style={styles.body} key={inc}>
            {inc}
          </Text>
        );
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((inc) => {
        return (
          <Text style={styles.body} key={inc}>
            {inc}
          </Text>
        );
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navData) => {
  const toggleFavorite = navData.navigation.getParam('toggleFavorite');
  const isFav = navData.navigation.getParam('isFav');
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={isFav ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'lucky-guy',
    fontSize: 22,
    textAlign: 'center',
  },
  body: {
    fontFamily: 'open-sans',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default MealDetailScreen;
