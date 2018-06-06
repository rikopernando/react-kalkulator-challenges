import React from 'react'
import { styleSheet, Text, View, TextInput } from 'react-native'


export default class InputAngka extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    handleChangeInput = (text) => {
        
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
                
                case " ":

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
                    perhitungan = ""
          }

        }
        this.props.onChangeText(hasil,text)
    }

    render () {       
        return <TextInput style={ this.props.style } value={ this.props.angka } onChangeText={ this.handleChangeInput } />
    }


}



