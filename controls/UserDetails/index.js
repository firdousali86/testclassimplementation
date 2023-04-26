import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props?.user?.firstName,
      lastName: props?.user?.lastName,
      gender: props?.user?.gender,
      age: props?.user?.age,
      dob: props?.user?.dob,
      contactNumber: props?.user?.contactNumber,
      homePhone: props?.user?.homePhone,
      education: props?.user?.education,
      degree: props?.user?.degree,
    };
  }

  renderPersonalFields = () => {
    const {firstName, lastName, gender, age, dob} = this.state;

    return (
      <>
        <TextInput
          style={[styles.inputField]}
          onChangeText={changedText => {
            this.setState({firstName: changedText});
          }}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({lastName: changedText});
          }}
          value={lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({gender: changedText});
          }}
          value={gender}
          placeholder="Gender"
        />

        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({dob: changedText});
          }}
          value={dob}
          placeholder="Date of Birth"
        />

        <TextInput
          style={styles.inputField}
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
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({contactNumber: changedText});
          }}
          value={contactNumber}
          placeholder="Contact Number"
        />

        <TextInput
          style={styles.inputField}
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
          style={styles.inputField}
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
      <View style={{flex: 1}}>
        {this.renderPersonalFields()}
        {this.renderContactFields()}
        {this.renderEducationalFields()}

        <Text>
          {this.state.firstName} {this.state.lastName}
        </Text>
      </View>
    );
  }
}

export default UserDetails;
