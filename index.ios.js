import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainView from './App/Components/Main';
import styles from './App/Styles/styles';

import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';

class StockApp extends Component {
  render() {
    return (

      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
        <Scene key="root">
          <Scene key="Main" title="The Market" component={MainView} initial={true}/>
        </Scene>
      </Router>

    );
  }
}

AppRegistry.registerComponent('StockApp', () => StockApp);
