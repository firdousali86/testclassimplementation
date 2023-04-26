import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import UserDetails from '../../controls/UserDetails';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: 'Firdous',
        lastName: 'Ali',
        gender: 'Male',
        age: '30',
        dob: '1/1/80',
        contactNumber: '+44444444',
        homePhone: '+55555555',
        education: 'MS',
        degree: 'CIS',
      },
    };
  }

  render() {
    const {user} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <ScrollView>
          <UserDetails user={user} />

          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 44,
              margin: 15,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              this.setState({
                user: {
                  firstName: 'Firdous2',
                  lastName: 'Ali2',
                  gender: 'Male2',
                  age: '302',
                  dob: '1/1/802',
                  contactNumber: '+444444442',
                  homePhone: '+555555552',
                  education: 'MS2',
                  degree: 'CIS2',
                },
              });
            }}>
            <Text>Change text</Text>
            <Text>Press Button</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('flexTestView');
            }}>
            <Text>Goto flex test</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
