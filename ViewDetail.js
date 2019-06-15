import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class ViewDetail extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],id_buku:this.props.navigation.state.params.id_buku,
        };
    }
    componentDidMount(){
    axios.get('http://nyilihbuku.000webhostapp.com/buku/getBuku.php?id_buku='+ this.state.id_buku)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
    render() {
        return (
            <View style={styles.vHeader}>
                <Header header={"©AgengPanjiTriAtmojo"} />
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View style={styles.boxitem}>
                            <Text>id buku={item.id_buku}</Text>
                            <Text>Nama buku ={item.nama_buku}</Text>
                            <Text>penulis={item.penulis}</Text>
                            <Text>penerbit={item.penerbit}</Text>
                        </View>
                    )
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            backgroundColor: '#ADD8E6',
        },
        boxitem1: {
            flex:0.8,
            width: 160,
            height: 50,
            backgroundColor: '#006633',
            borderWidth: 1,
            borderColor: '#006633',
            alignItems: 'center',
            justifyContent: 'center', 
        },
    });
    
