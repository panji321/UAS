import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class AddPengembalian extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id_kembali: '',
          waktu_pengembalian: '',
          id_pinjam: '',
      }
  }
  handleSubmit = event => {
    axios.post('apinya tapi belum', {
        id_kembali: this.state.id_kembali,
        waktu_pengembalian: this.state.waktu_pengembalian,
        id_pinjam: this.state.id_pinjam,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  render() {   
      return (
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"©AgengPanjiTriAtmojo"} />
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>id_pinjam</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={id_kembali => this.setState({ id_kembali })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>wkatu_pengembalian</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={wkatu_pengembalian => this.setState({ wkatu_pengembalian })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>id_pinjam</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_pinjam => this.setState({ id_pinjam })}
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                            }}
                  >
                  <Text style={styles.txtButton}>Add Data Pengembalian</Text>
                  </TouchableHighlight>
                </View>   
            </View>   
        </ScrollView>
        </View>
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
        flex: 1,
        backgroundColor: 'white',
    },
    vHeader: {
       flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#006633',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textBox1:{
        color: 'white',
        fontSize: 15,    
    },
    box2: {
        flex: 0.8,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006633',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default AddPengembalian;