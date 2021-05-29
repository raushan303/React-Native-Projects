import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import {Text} from 'react-native';
import { Title } from 'react-native-paper';


import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";


class BasicTab extends Component {
	render() {
	return (
		<Container>
		<Header hasTabs>
		<Left>
			<Button transparent onPress={() => this.props.navigation.openDrawer()}>
			<Icon name="menu" />
			</Button>
		</Left>
		<Body>
			<Title>Cards</Title>  
		</Body>
		
		<Right />
		</Header>

		<Tabs>
		<Tab heading="Tab1">
			<TabOne />
		</Tab>
		<Tab heading="Tab2">
			<TabTwo />
		</Tab>
		<Tab heading="Tab3">
			<TabThree />
		</Tab>
		</Tabs>
		</Container>
	);
	}
}

export default BasicTab;
