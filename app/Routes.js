import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import List from './screens/list';
import MovieDetail from './screens/movieDetail';

const Stack = createStackNavigator();


function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          }}
        >
          <Stack.Screen name="Movies" component={List} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;
  