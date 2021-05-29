import React, { Component } from 'react'
import { Text, View, TouchableHighlight,Alert } from 'react-native';
import {
      Container,
      Header,
      Title,
      Content,
      Button,
      Icon,
      Card,
      CardItem,
      Body,
      Left,
      Right
} from "native-base";
import styles from "../styles/styles";
import {SUBJECTS} from '../../shared/subjects';

export class Test extends Component {
      render() {

            const displaysubject=SUBJECTS.map((subject)=>{
                  return (

                        <Content padder key={subject.subid}>
                              <Card style={styles.mb} >
                        <TouchableHighlight
                              activeOpacity={1.0}
                              underlayColor="green"
				      style={{ ...styles.touchbutton, backgroundColor: "white"}}
				      onPress={() => {
					   this.props.navigation.navigate("Cards",{subject:subject.name})
				      }}
			      >
                       
                        
                              <CardItem >
                              <Body>
                              <Text style={styles.q}>{subject.name.toUpperCase()}</Text>
                              </Body>
                              </CardItem>
                       
                        </TouchableHighlight>
                        </Card>
                        </Content>
                  );
            })

            return (
            <Container style={styles.container}>
		<Header>
			<Left>
				<Button transparent onPress={() => this.props.navigation.openDrawer()}>
				<Icon name="menu" />
				</Button>
			</Left>
			<Body>
				<Text>Basic Card</Text>
			</Body>
			<Right />
		</Header>
            <Content padder>
                  {displaysubject}
            </Content>
           
            </Container>     
            )
      }
}

export default Test
