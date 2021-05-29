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

// import Vimeo from 'react-native-vimeo';

export class Video extends Component {
      render() {
            return (
                  <Container style={styles.container}>
                  <Header>
                  <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                        </Button>
                  </Left>
                  <Body>
                        <Title>Video Player</Title>
                  </Body>
                  <Right />
                  </Header>
                  
                  <Content padder>
                        <Text> {this.props.route.params.subject} </Text>
                        <Text> {this.props.route.params.chapter} </Text>
                  </Content>
                  </Container>
            )
      }
}

export default Video
