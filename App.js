import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'lucky-guy': require('./assets/fonts/LuckiestGuy.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
