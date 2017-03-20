import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, Navigator } from 'react-native';
import WelcomeScreen from './components/welcome';
import Suggestions from './components/suggestions';
import Profile from './components/profile';
import Wishlist from './components/wishlist';
import AddWishlist from './components/addwishlist';
import ShowItem from './components/item';
import AddItem from './components/additem';
import EditProfile from './components/editprofile';


export default class wishlist extends Component {

  renderScene(route, navigator) {
    if(route.name == 'Login') {
      return <WelcomeScreen navigator={navigator} />
    }
    if(route.name == 'Suggestions') {
      return <Suggestions navigator={navigator} />
    }
    if(route.name == 'Profile') {
      return <Profile navigator={navigator} />
    }
    if(route.name == 'Wishlist') {
      return <Wishlist navigator={navigator} />
    }
    if(route.name == 'AddWishlist') {
      return <AddWishlist navigator={navigator} />
    }
    if(route.name == 'ShowItem') {
      return <ShowItem navigator={navigator} />
    }
    if(route.name == 'AddItem') {
      return <AddItem navigator={navigator} />
    }
    if(route.name == 'EditProfile') {
      return <EditProfile navigator={navigator} />
    }
  }

  render() {
    return (
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Login' }}
          renderScene={ this.renderScene } 
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          />
    );
  }
}


AppRegistry.registerComponent('wishlist', () => wishlist);
