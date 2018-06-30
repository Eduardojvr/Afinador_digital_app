import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// class Rodape extends Component{
//   render(){
//     return (
//       <View style={styles.container}>
//         <Text style={styles.downBar}>
//             Created by Creativex
//         </Text> 
//       </View>  
//     );
//   }
// }

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {isShowingText: true};
  
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 500);
  } 
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    let pic = {
      uri: 'https://i.imgur.com/1A9ZvHC.png'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 293, height: 210}}/>
        <Text style={styles.tap}>
          Toque para iniciar{display}
        </Text>
        <Text style={styles.downBar}>
            Created by Creativex
        </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
  },
  tap:{
    fontSize: 30
    
  },
  downBar:{
    fontSize: 10,
    margin: 10
  },
});
