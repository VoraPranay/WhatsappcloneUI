import React from 'react';
import {
   View,
   ListView,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        id: 'ChatView',
        name: props.name,
        image: props.image,
      });
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name={props.icon} size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>{props.message}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ChatsTab = props => (
  <View style={{ flex: 1 }} >
    <View style={styles.row}>
      <Image source={hasura5} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>WELCOME</Text>
          <Text style={styles.time}>10:00p.m.</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name='done' size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>Welcome from T70/Pranay</Text>
        </View>
      </View>
    </View>

    <View style={styles.row}>
      <Image source={hasura7} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>React Native</Text>
          <Text style={styles.time}>1:00p.m.</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name='done' size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>Whats app clone </Text>
        </View>
      </View>
    </View>

    <View style={styles.row}>
      <Image source={hasura6} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>Pranay </Text>
          <Text style={styles.time}>9:00p.m.</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name='done' size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>Made under HPDF 2017 </Text>
        </View>
      </View>
    </View>

    <View style={styles.row}>
      <Image source={hasura} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>Hasura </Text>
          <Text style={styles.time}>24x7</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name='done' size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>Hasura.io</Text>
        </View>
      </View>
    </View>

     <View style={styles.row}>
      <Image source={hasura1} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>Has </Text>
          <Text style={styles.time}>24x7</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name='done' size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>Thank u</Text>
        </View>
      </View>
    </View>

     <Text style={{color:'green'}}>Made by pranay under HPDF 2017 
    <Image source={hasura} style={{height: 30, width: 50 }} /></Text>

  </View>
  );

export default ChatsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
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
  time: {
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
  },
});