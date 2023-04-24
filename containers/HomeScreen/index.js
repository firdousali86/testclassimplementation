import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      dob: '',
      contactNumber: '',
      homePhone: '',
      education: '',
      degree: '',
    };
  }

  //personal details
  //contact details
  //educational details

  renderPersonalFields = () => {
    const {firstName, lastName, gender, age, dob} = this.state;

    return (
      <>
        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({firstName: changedText});
          }}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({lastName: changedText});
          }}
          value={lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({gender: changedText});
          }}
          value={gender}
          placeholder="Gender"
        />

        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({dob: changedText});
          }}
          value={dob}
          placeholder="Date of Birth"
        />

        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({age: changedText});
          }}
          value={age}
          placeholder="Age"
        />
      </>
    );
  };

  renderContactFields = () => {
    const {contactNumber, homePhone} = this.state;

    return (
      <>
        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({contactNumber: changedText});
          }}
          value={contactNumber}
          placeholder="Contact Number"
        />

        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({homePhone: changedText});
          }}
          value={homePhone}
          placeholder="Home Number"
        />
      </>
    );
  };

  renderEducationalFields = () => {
    const {education, degree} = this.state;

    return (
      <>
        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({education: changedText});
          }}
          value={education}
          placeholder="Education"
        />

        <TextInput
          style={{backgroundColor: 'white', height: 45}}
          onChangeText={changedText => {
            this.setState({degree: changedText});
          }}
          value={degree}
          placeholder="Name of Degree"
        />
      </>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        {this.renderPersonalFields()}
        {this.renderContactFields()}
        {this.renderEducationalFields()}

        <TouchableOpacity
          onPress={() => {
            this.setState({firstName: 'sfskdfjkh', lastName: 'sdfsdsdf'});
          }}>
          <Text>Submit button</Text>
        </TouchableOpacity>

        <Text>
          {this.state.firstName} {this.state.lastName}
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
