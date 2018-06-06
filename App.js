import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
        angka : "",
        hasil : 0
    }
  }

 hitung = (text) =>  {

		var hasil = 0
		var perhitungan = ""

			for (var i = 0; i < text.length; i++) {
    
			  switch(text[i]){
            
				case "*":

					perhitungan = text[i]
					break;

				case "x":
             
					 perhitungan = text[i]
					 break;
            
				case "+":

					perhitungan = text[i]
					break;

				case "-":

					perhitungan = text[i]
					break;

				case "/":

					perhitungan = text[i]
					break;

				default:
                
					if (perhitungan == "x" || perhitungan == "*"){

						hasil *= Number(text[i])

					}else if(perhitungan == "+"){
               
						hasil += Number(text[i])

					}else if(perhitungan == "-"){

						hasil -= Number(text[i])

					}else if(perhitungan == "/"){

						hasil /= Number(text[i])

					}else{

						hasil = Number(text[i])

					}   
          }

        }

  console.log(hasil)
        this.setState({
          hasil : hasil,
		  angka : text
        })
   }

  render() {
    return (
      <View style={styles.container}>

        <Text style={ {fontSize : 32} }>Kalkulator</Text>

        <TextInput
            style={ styles.inputBox }
            value={  this.state.angka } 
            onChangeText={ this.hitung } 
            />

        <Text style={ {fontSize : 20} }>Hasil : { this.state.hasil }</Text>
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
    fontSize : 15

  }
});
