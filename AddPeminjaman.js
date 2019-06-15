import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Image} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class AddPeminjaman extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id_pinjam: '',
          nama_peminjam: '',
          waktu_pinjam: '',
          id_buku: '',
          srcImg: '',
          uri:'',
          fileName:'',
          loading: false,

      }
  }
  handleSubmit = event => {
    axios.post('apinya tapi belum', {
        id_pinjam: this.state.id_pinjam,
        nama_peminjam: this.state.nama_peminjam,
        waktu_pinjam: this.state.waktu_pinjam,
        id_buku: this.state.id_buku
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
choosePicture =()=>{
  var ImagePicker = require('react-native-image-picker');
  var options={
      title:'Pilih Gambar',
      storageOptions:{
          skipBackup: true,
          patch: 'images'
      }
  };
  ImagePicker.showImagePicker(options,(response)=>{
      console.log(Response=', response');
      if (response.didCancel){
          console.log('User camcelled image picker');
      }
      else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton){
          console.log('User tapped custom button: ', response.customButton);
      }
      else {
          console.log(response.fileName);
          this.setState({
              srcImg:{uri: response.uri},
              uri:response.uri,
              fileName: response.fileName
          });
      }
  });
};
uploadPicture = () => {
  console.log('mulai upload');
  this.setState ({loading : true})
  const data = new FormData();
  data.append('fileToUpload', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.fileName,
  });
  const url= "apinya tapi belum"
  fetch(url, {
      method: 'post',
      body: data
  })
  .then((response)=> response.json())
  .then((responseJson)=> {
      console.log(responseJson);
      this.state({
          loading: false
      })
  });
}
submit(){
  this.uploadPicture();
};
  render() {   
      return (
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"©AgengPanjiTriAtmojo"} />
                <View style={styles.conPreview}>
                {(this.state.srcImg!='')&&
                (<Image source={this.state.srcImg} style={styles.uploadAvatar}/>)
                }
                 </View>
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>id_pinjam</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={id_pinjam => this.setState({ id_pinjam })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>nama_peminjam</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={nama_peminjam => this.setState({ nama_peminjam })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>waktu_pinjam</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={waktu_pinjam => this.setState({ waktu_pinjam })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>id_buku</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_buku => this.setState({ id_buku })}
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight activeOpacity={0.5}
                    style={styles.BoxStyle2} onPress={()=> this.choosePicture() }>
                    <Text style={styles.txtBox2}>Pilih Foto</Text>
           
                  </TouchableHighlight>
                  <TouchableHighlight activeOpacity={0.5} 
                    style={styles.BoxStyle1} onPress={()=> this.uploadPicture()}>
                    <Text style={styles.txtBox2}>Upload</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                            }}
                  >
                  <Text style={styles.txtButton}>Add Data Peminjaman</Text>
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
    BoxStyle1: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#006633',
        marginTop:40,
        margin:10,
    },
    BoxStyle2: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#006633',
        marginTop:40,
        margin:10,
    },
    box3: {
        flex: 0.8,
        margin:10,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxedit: {
      flex: 0.2,
      margin:10,
      marginTop:10,
      marginLeft:40,
      flexDirection: 'row',
      alignItems: 'center'
  },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    uploadAvatar:{
      height: 200,
      width: 300,
      borderColor: '#006633',
      marginBottom:20
    },
    conPreview:{
      flex:8,
      alignItems:'center',
      justifyContent:'center',
      borderColor: '#006633',
    
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
    gedit:{
      height: 25,
      width: 25,
      alignItems:'center',
      justifyContent:'center',
  },
    box2: {
        flex: 0.2,
        backgroundColor: 'white',
        margin:10,
        flexDirection: 'row',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default AddPeminjaman;