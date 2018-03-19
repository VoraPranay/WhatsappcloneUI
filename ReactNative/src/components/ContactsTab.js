import React from 'react';
import {
   View,
   Image,
   Text,
   ListView,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';
 var hasura = require('../assets/hasura.png')
 var hasura1 = require('../assets/andrew.jpg')
var hasura2 = require('../assets/brendon.jpg')
var hasura3 = require('../assets/kyle.jpg')
var hasura4 = require('../assets/dan.jpg')
var hasura5 = require('../assets/eric.jpg')
var hasura6 = require('../assets/quincy.jpg')
var hasura7 = require('../assets/wes.jpg')




const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigator.push({
        id: 'ProfileView',
        name: props.name,
        image: props.image,
        status: props.status,
      });
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.mblTxt}>Mobile</Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msgTxt}>{props.status}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ContactsTab = props => (
  
  <View style={{ flex: 1 }} >
    
    <View style={styles.row}>
    <Image source={hasura} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Hasura</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Hello </Text>
      </View>
    </View>
    </View>

    <View style={styles.row}>
    <Image source={hasura1} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Andrew</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Hello Interns </Text>
      </View>
    </View>
    </View>
     
    <View style={styles.row}>
    <Image source={hasura2} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Dan</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Busy </Text>
      </View>
    </View>
    </View>

    <View style={styles.row}>
    <Image source={hasura3} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Brendon</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Text Me </Text>
      </View>
    </View>
    </View>

    <View style={styles.row}>
    <Image source={hasura4} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Has</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Hello world </Text>
      </View>
    </View>
    </View>

    <View style={styles.row}>
    <Image source={hasura5} style={styles.pic} />
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>Pranay</Text>
        <Text style={styles.mblTxt}>Mobile</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msgTxt}>Made under HPDF 2017 </Text>
      </View>
    </View>
    </View>

    <Text style={{color:'green'}}>Made by pranay under HPDF 2017 
    <Image source={hasura} style={{height: 30, width: 50 }} /></Text>
        
  
  </View>
  );

export default ContactsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
    marginLeft: 15,
  },
});