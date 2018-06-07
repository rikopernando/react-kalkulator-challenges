import React from 'react'
import {Text} from 'react-native'


export default class Hasil extends React.Component {
 
    constructor(props){
        super(props)
    }

    render(){
        return <Text style={ {fontSize : 25} }>Hasil : { this.props.hasil }</Text>
    }

}

