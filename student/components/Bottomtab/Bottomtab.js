import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from '../Home/homestack'
import AboutNavigator from '../about/aboutstack'
import ProfileNavigator from '../Profile/MyProfileStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
	return (
	<Tab.Navigator
		initialRouteName="Home"
		activeColor="blue"
		shifting = {true}
	>
		<Tab.Screen
			name="Home"
			component={HomeNavigator}
			options={{
				tabBarLabel: 'My Courses',
				tabBarColor: 'red',
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="home" color='#000000' size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="About"
			component={AboutNavigator}
			options={{
				tabBarLabel: 'Updates',
				tabBarColor: 'black',
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="bell" color='#000000' size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={ProfileNavigator}
			options={{
				tabBarLabel: 'Profile',
				tabBarColor: '#fff',
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="account" color='#000000' size={26} />
				),
			}}
		/>
	</Tab.Navigator>
	);
}