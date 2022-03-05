import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filterrs</Text>
      <View style={styles.filterCont}>
        <Text>Gluten Free</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.accentColor}
          value={isGlutenFree}
          onValueChange={(newVal) => setIsGlutenFree(newVal)}
        />
      </View>
      <View style={styles.filterCont}>
        <Text>Lactose Free</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.accentColor}
          value={isLactoseFree}
          onValueChange={(newVal) => setIsLactoseFree(newVal)}
        />
      </View>
      <View style={styles.filterCont}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.accentColor}
          value={isVegan}
          onValueChange={(newVal) => setIsVegan(newVal)}
        />
      </View>
      <View style={styles.filterCont}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.accentColor}
          value={isVegetarian}
          onValueChange={(newVal) => setIsVegetarian(newVal)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              navData.navigation.getParam('save');
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 2,
    marginHorizontal: 18,
  },
  title: {
    fontFamily: 'lucky-guy',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default FiltersScreen;
