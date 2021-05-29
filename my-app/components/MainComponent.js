import * as React from 'react';
import { View, Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import {Check} from './HomeComponent';
import {HomeScreen,CreatePostScreen} from './MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';


const MenuStack = createStackNavigator();
const HomeStack = createStackNavigator();



function StackScreen1({navigation}) {
	const opt={
		headerLeft: () => (
			<Button
			  onPress={() => navigation.toggleDrawer()}
			  title="T"
			  color="blue"
			/>
		)
	};
	return (	
		<MenuStack.Navigator initialRouteName="Menu">
			<MenuStack.Screen name="Menu" component={Menu} options={opt}/>
			<MenuStack.Screen name="homescreen" component={HomeScreen} options={opt}/>
			<MenuStack.Screen name="create" component={CreatePostScreen} options={opt}/>
		</MenuStack.Navigator>
	);
}

function StackScreen2({navigation}){

	const opt={
		headerLeft: () => (
			<Button
			  onPress={() => navigation.toggleDrawer()}
			  title="T"
			  color="blue"
			/>
		)
	};
	return (
		<HomeStack.Navigator initialRouteName="Home" >
			<HomeStack.Screen name="Home" component={Home} options={opt}/>
			<HomeStack.Screen name="Check" component={Check} options={opt}/>
		</HomeStack.Navigator>
	);
}


function NewScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>New!</Text>
		</View>
	);
}
    
function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Main() {
	return (
		<View>
		{/* <NavigationContainer>
			<Drawer.Navigator initialRouteName="mainhome">
				<Drawer.Screen name="mainhome" component={StackScreen2} />
				<Drawer.Screen name="mainmenu" component={StackScreen1} />
			</Drawer.Navigator>
		</NavigationContainer> */}
		<NavigationContainer>
		<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="New" component={NewScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

		</NavigationContainer>
		</View>
	);
}

export default Main;




// import * as React from 'react';
// import { Button, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//			<Button
//				onPress={() => navigation.navigate('Notifications')}
//				title="Go to notifications"
//			/>

// 			<Button 
// 				onPress={()=>navigation.toggleDrawer()}
// 				title="button"
// 			/>
// 		</View>
// 	);
// }

// function NotificationsScreen({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// 			<Button onPress={() => navigation.goBack()} title="Go back home" />
// 		</View>
// 	);
// }

