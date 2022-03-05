import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
  const mealId = navData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('favorite');
          }}
        />
      </HeaderButtons>;
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
