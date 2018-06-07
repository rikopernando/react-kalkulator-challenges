import React from 'react'
import { TextInput } from 'react-native'


export default class InputAngka extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    handleChangeInput = (text) => {
        
		var hasil = 0
		var perhitungan = ""
        var newAngka = ""
        var angkaAwal = 0

			for (var i = 0; i < text.length; i++) {
    
			  switch(text[i]){
            
				case "*":

					if (perhitungan != ""){
                    angkaAwal = hasil
                    }else{
                    angkaAwal = newAngka
                    }
                    perhitungan = text[i]
                    newAngka = ""
					break;

				case "x":
             
					if (perhitungan != ""){
                    angkaAwal = hasil
                    }else{
                    angkaAwal = newAngka
                    }
                    perhitungan = text[i]
                    newAngka = ""
					break;
            
				case "+":

					if (perhitungan != ""){
                    angkaAwal = hasil
                    }else{
                    angkaAwal = newAngka
                    }
                    perhitungan = text[i]
                    newAngka = ""
					break;

				case "-":

					if (perhitungan != ""){
                    angkaAwal = hasil
                    }else{
                    angkaAwal = newAngka
                    }
                    perhitungan = text[i]
                    newAngka = ""
					break;

				case "/":

					if (perhitungan != ""){
                    angkaAwal = hasil
                    }else{
                    angkaAwal = newAngka
                    }
                    perhitungan = text[i]
                    newAngka = ""
					break;
                
                case " ":

					break;


				default:
                
                    if(newAngka == ""){
                        newAngka = Number(text[i])
                    }else{
                        newAngka = newAngka + text[i]
                    }
                  

					if (perhitungan == "x" || perhitungan == "*"){

                        hasil = Number(angkaAwal) * Number(newAngka)

					}else if(perhitungan == "+"){
                        
                        hasil = Number(angkaAwal) + Number(newAngka)

					}else if(perhitungan == "-"){

                        hasil = Number(angkaAwal) - Number(newAngka)
						
					}else if(perhitungan == "/"){

                        hasil = Number(angkaAwal) / Number(newAngka)

                    }
                   
          }

        }
        this.props.onChangeText(hasil,text)
    }

    render () {       
        return <TextInput style={ this.props.style } value={ this.props.angka } onChangeText={ this.handleChangeInput } />
    }


}



