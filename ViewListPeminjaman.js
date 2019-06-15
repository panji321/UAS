import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class ViewListPeminjaman extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get('http://nyilihbuku.000webhostapp.com/buku/getBukulist.php')
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
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                            <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("ViewDetail",{id_buku:item.id_buku})}
                            title={item.id_buku}
                            titleStyle={{color:'#006633', fontWeight:'bold'}}
                        />   
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
            backgroundColor: 'white',
        },
        list: {
            marginTop:10
        },
    });
    
