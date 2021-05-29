import React, { Component } from 'react';
import { View, Platform, Text,Button,Alert } from 'react-native';


export class Check extends Component{

      constructor(props) {
            super(props)

      }

    
      
      render(){
            return (
                  <View>
                              <Text>this is check route</Text>
                  </View>
            );
      }
}





class Home extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <View>
                        <Button
                              title="Press me"
                              onPress={() => this.props.navigation.navigate('Check',{items:10})}
                        />
                  </View>
            );
      }
}

export default Home;