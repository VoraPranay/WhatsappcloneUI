import React from 'react';
import { View,Text,Image } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Header from './Header';
//import Calls from './CallsTab';
import Chats from './ChatsTab';
import Contacts from './ContactsTab';
import Data1 from '../data/data.json';
let uri = '/Users/prashant/Whatsapp/hello-react-native/React Native/src/data/data.json';
var Data = require('../data/data.json');
var hasura = require('../assets/hasura.png')



// Main Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: [],
      Chats: [],
  
    };
    fetch(Data)
     .then(response => response.json())
     .then(data => this.setState({
       Contacts: data.Contacts,
       Chats: data.Chats,
      
     }));
  }
  render() {
    return (
      
      <View style={{ flex: 1 }}>
      <Header>
      
       </Header>
     
        <ScrollableTabView
          style={{ borderColor: '#fff' }}
          tabBarUnderlineStyle={style = { backgroundColor: '#fff' }}
          tabBarBackgroundColor="#075e54"
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
          initialPage={1}
        >
          
          <Chats
            tabLabel="CHATS"
            ChatsData={this.state.Chats}
            {...this.props}
          />
          <Contacts
            tabLabel="CONTACTS"
            ContactsData={this.state.Contacts}
            {...this.props}
          />
        </ScrollableTabView>
      </View>
    );
  }
}

export default Home;