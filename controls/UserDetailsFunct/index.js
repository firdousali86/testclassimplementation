import PropTypes from 'prop-types';
import React, {useEffect, useState, useMemo, memo} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const UserDetailsFunct = props => {
  const [firstName, setFirstName] = useState(props?.user?.firstName);
  const [lastName, setlastName] = useState(props?.user?.lastName);
  const [gender, setGender] = useState(props?.user?.gender);

  useEffect(() => {
    console.log('Userdetailsfunct > componentdidmount');

    return () => {
      console.log('Userdetailsfunct > componentwillunmount');
    };
  }, []);

  useEffect(() => {
    console.log('Userdetailsfunct > componentdidupdate');
    setFirstName(props?.user?.firstName);
    setlastName(props?.user?.lastName);
    setGender(props?.user?.gender);
  }, [props.user]);

  const convertToFahrenheit = useMemo(() => {
    console.log('UserdetailsFunt > conversion function');

    return props.celcius * 1.8 + 32;
  }, [props.celcius]);

  // const convertToFahrenheit = () => {
  //   console.log('UserdetailsFunt > conversion function');

  //   return props.celcius * 1.8 + 32;
  // };

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

  console.log('Userdetailsfunct > render');

  return (
    <View style={{flex: 1}}>
      {renderPersonalFields()}

      <Text>{convertToFahrenheit}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          height: 44,

          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (props.onSubmitBtnPress) {
            props.onSubmitBtnPress();
          }
        }}>
        <Text>Change text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(UserDetailsFunct);
// export default UserDetailsFunct;
