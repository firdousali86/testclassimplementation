import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const UserForm = props => {
  const [userName, setUserName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPlace, setUserPlace] = useState('');

  return (
    <View style={{backgroundColor: '#DEDBDB'}}>
      <Text>Input User data:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={changedText => {
          setUserName(changedText);
        }}
        value={userName}
        placeholder="Name"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={changedText => {
          setUserLanguage(changedText);
        }}
        value={userLanguage}
        placeholder="Language"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={changedText => {
          setUserPlace(changedText);
        }}
        value={userPlace}
        placeholder="Place"
      />
      <Button
        title={'Insert'}
        onPress={() => {
          if (!userName || !userLanguage || !userPlace) {
            return;
          }

          const newUserRecord = {
            name: userName,
            language: userLanguage,
            place: userPlace,
          };

          if (props.onFormSubmit) {
            props.onFormSubmit(newUserRecord);
          }

          //pass this newUserRecord object out to parent object

          setUserName('');
          setUserLanguage('');
          setUserPlace('');
        }}
      />
    </View>
  );
};

UserForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  onFormSubmit: () => {},
};

export default UserForm;
