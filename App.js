import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Hasil from './components/Hasil'
import InputAngka from './components/input'

export default class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
        angka : "",
        hasil : 0
    }
  }

 hitung = (hasil,text) =>  {
        this.setState({
          hasil : hasil,
		  angka : text
        })
   }

  render() {
    return (
      <View style={styles.container}>

        <Text style={ {fontSize : 37} }>Kalkulator</Text>

        <InputAngka angka={ this.state.angka } style={ styles.inputBox } onChangeText={ this.hitung } />
 
        <Hasil hasil={this.state.hasil} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin : 32
  },
  inputBox : {
    width : '100%',
    borderWidth : 1,
    borderColor : 'black',
    borderRadius : 6,
    padding : 12,
    margin : 6,
    fontSize : 20

  }
});
