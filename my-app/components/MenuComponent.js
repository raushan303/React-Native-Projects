import React, { Component } from 'react';
import { View, Platform, Text,Button,Alert,TextInput } from 'react-native';


export function HomeScreen({ navigation, route }) {
      React.useEffect(() => {
            if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            
            }
      }, [route.params?.post]);
    
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                  title="Create post"
                  onPress={() => navigation.navigate('create')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            </View>
      );
}
    
export function CreatePostScreen({ navigation, route }) {
      const [postText, setPostText] = React.useState('');
    
      return (
            <>
            <TextInput
                  multiline
                  placeholder="What's on your mind?"
                  style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                  value={postText}
                  onChangeText={setPostText}
            />
            <Button
                  title="Done"
                  onPress={() => {
                  // Pass params back to home screen
                  navigation.navigate('homescreen', { post: postText });
                  }}
            />
            </>
      );
}





class Menu extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <View>
                        <Button
                              title="Press me"
                              onPress={() => this.props.navigation.navigate('homescreen')}
                        />
                  </View>
            );
      }
}

export default Menu;

//Alert.alert('Simple Button pressed')