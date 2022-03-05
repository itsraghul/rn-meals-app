import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const CategoryGridTile = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <View style={{ ...styles.gridItem, backgroundColor: props.color }}>
        <Text style={styles.title}> {props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 12,
    padding: 10,
    elevation: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: 'lucky-guy',
  },
});

export default CategoryGridTile;
