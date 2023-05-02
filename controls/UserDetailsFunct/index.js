import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const UserDetailsFunct = props => {
  const [firstName, setFirstName] = useState(props?.user?.firstName);
  const [lastName, setlastName] = useState(props?.user?.lastName);
  const [gender, setGender] = useState(props?.user?.gender);

  const renderPersonalFields = () => {
    return (
      <>
        <TextInput
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          value={firstName}
          placeholder="First Name"
          style={styles.inputField}
        />

        <TextInput
          onChangeText={changedText => {
            setlastName(changedText);
          }}
          value={lastName}
          placeholder="Last Name"
          style={styles.inputField}
        />

        <TextInput
          onChangeText={changedText => {
            setGender(changedText);
          }}
          value={gender}
          placeholder="Gender"
          style={styles.inputField}
        />
      </>
    );
  };

  return <View style={{flex: 1}}>{renderPersonalFields()}</View>;
};

export default UserDetailsFunct;
