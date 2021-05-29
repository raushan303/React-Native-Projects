import React, { Component } from 'react'

import { Button, View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import Bottomtab from './Bottomtab/Bottomtab';
import Tabs from './Tabs/TabsComponent';
import Cards from './Card/Card';
import Test from './Card/test';
import Chapter from './Courses/Chapter';
import Subjects from './Courses/Subject';
import Video from './Courses/Video';

const Drawer = createDrawerNavigator();

function Drawers(){
      return(
			<Drawer.Navigator initialRouteName="Tabs">
				<Drawer.Screen name="bottomtab" component={Bottomtab} />
				<Drawer.Screen name="Tabs" component={Tabs} />
				<Drawer.Screen name="Test" component={Test} />
				<Drawer.Screen name="Subjects" component={Subjects} />
			</Drawer.Navigator>
      );
}

const Stack = createStackNavigator();

export class MainComponent extends Component {
      render() {
            return (
                  // <NavigationContainer>
                        <Stack.Navigator initialRouteName="drawers"  headerMode= "none">
                        <Stack.Screen name="drawers" component={Drawers} />
                        <Stack.Screen name="chapter" component={Chapter} />
                        <Stack.Screen name="video" component={Video} />
                        <Stack.Screen name="Cards" component={Cards} />
                        </Stack.Navigator>
                  // </NavigationContainer>
            )
      }
}

export default MainComponent
