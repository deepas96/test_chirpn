/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Routes from './app/Routes'
import {Provider} from 'react-redux'
import configureStore from './app/configureStore';

const store = configureStore()

class App extends Component {
  render() {
    return (  
      <Provider store = {store}>
        <Routes/>      
      </Provider>        
    );
  }
}

export default App




