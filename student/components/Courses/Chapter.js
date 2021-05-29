import React, { Component } from "react";
import { Image, FlatList, Text,ScrollView} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import { Title } from 'react-native-paper';

import styles from "../styles/styles";
import {PHYSICS} from "../../shared/subjects";
const cardImage = require("../../assets/sub.jpg");

function RenderCard({item,navigation,subject}){
      let name=item.name;
      if(item.name.length>22){
            name=item.name.substring(0,22)+"..";
      }
      
      return(
      <Button style={styles.grid} onPress={()=>navigation.navigate("video",{subject:subject,chapter:item.name})}>
      <Card style={styles.cd}>
            <CardItem cardBody>
                  <Image
                  style={{
                        resizeMode: "cover",
                        width: null,
                        height: 130,
                        flex: 1
                  }}
                  source={cardImage}
            />
            </CardItem>
            <CardItem style={{ paddingVertical: 0,marginLeft:20,marginBottom:0 }}>
                  <Text style={styles.ta}>13 Videos</Text>
                  <Text style={styles.ta}>14 chapters</Text>
            </CardItem>
            <CardItem style={{ paddingVertical: 0,marginLeft:10,marginTop:0 }}>
                  <Text style={styles.tb}>{name}</Text>
            </CardItem>
            
            <CardItem style={{ paddingVertical: 0,marginLeft:20 }}>
                  <Text style={styles.tc}>{item.learn}% Learnt</Text>
                  <Text style={styles.tc}>{item.practice}% Practice</Text>
            </CardItem>
      </Card>
      </Button>
      );
}

class NHCardImage extends Component {
      render() {

      const chapters=PHYSICS.map((chapter,i)=>{
            return(<RenderCard item={chapter} navigation={this.props.navigation} subject={this.props.route.params.subject} key={i}/>);
      });        
      return (
            <Container style={styles.container}>
            <Header>
            <Left>
                  <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                  </Button>
            </Left>
            <Body>
                  <Title>Card Image</Title>
            </Body>
            <Right />
            </Header>
            
            <Content padder>
                  {chapters}
            </Content>
            </Container>
      );
      }
}

export default NHCardImage;
