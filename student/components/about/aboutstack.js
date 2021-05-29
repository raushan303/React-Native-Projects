import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from './about'
import {Header} from '../header/header'

const Stack = createStackNavigator()

export default function ProfileNavigator({navigation}) {
	return (
		<Stack.Navigator initialRouteName='About' 
			screenOptions={{
			headerTintColor: '#fff', 
			headerStyle: {
				backgroundColor: '#fff', 
			}, 
			headerTitleStyle: {
				fontWeight: 'bold', 
			}
			}}
		>
		
		<Stack.Screen name='About' component={About} 
			options={{ 
				headerTitle: () => <Header navigation={navigation} color='1f65ff'/>
			}}
		/>
		
		</Stack.Navigator>
	);
}