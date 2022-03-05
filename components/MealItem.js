import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '95%',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    elevation: 25,
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'lucky-guy',
    margin: 7,
    fontSize: 18,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 5,
    textAlign: 'center',
  },
});

export default MealItem;
