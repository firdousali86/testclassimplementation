import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

const MyList = props => {
  const [listData, setListData] = useState([
    {name: 'Edward', language: 'English', place: 'UK'},
    {name: 'Victor', language: 'Ukranian', place: 'Scotland'},
    {name: 'Anusha', language: 'Hindi', place: 'India'},
    {name: 'Lakshmi', language: 'Tamil', place: 'India'},
  ]);

  const [userName, setUserName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPlace, setUserPlace] = useState('');

  const renderCellItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{height: 40, width: windowWidth}}
        onPress={() => {
          props.navigation.navigate('listItemDetails', {data: item});
        }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyListMessage = () => {
    return (
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>No Data found</Text>
      </View>
    );
  };

  const renderHeaderFooter = () => {
    return <View style={{backgroundColor: 'black', height: 5}}></View>;
  };

  const userInputView = () => {
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

            setListData([...listData, newUserRecord]);
            setUserName('');
            setUserLanguage('');
            setUserPlace('');
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F5F2F2'}}>
      <FlatList
        data={listData}
        renderItem={renderCellItem}
        ListEmptyComponent={renderEmptyListMessage}
        ItemSeparatorComponent={() => {
          return <View style={{backgroundColor: 'grey', height: 5}}></View>;
        }}
        ListHeaderComponent={renderHeaderFooter}
        ListFooterComponent={renderHeaderFooter}
      />
      {userInputView()}
    </View>
  );
};

export default MyList;
