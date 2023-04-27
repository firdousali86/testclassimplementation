import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
  Modal,
} from 'react-native';
import styles from './styles';
import UserForm from '../../controls/UserForm';

const windowWidth = Dimensions.get('window').width;

const MyList = props => {
  useEffect(() => {
    //it will run whenever there is a change in props
    if (props?.route?.params?.owner) {
      setJumpText(props?.route?.params?.owner);
    }
  }, [props]);

  //whenever any thing within the props changes, just let me know in the callback

  // console.log(props.route.params);

  const [listData, setListData] = useState([
    {name: 'Edward', language: 'English', place: 'UK'},
    {name: 'Victor', language: 'Ukranian', place: 'Scotland'},
    {name: 'Anusha', language: 'Hindi', place: 'India'},
    {name: 'Lakshmi', language: 'Tamil', place: 'India'},
  ]);

  const [jumpText, setJumpText] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

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

  const renderModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const renderFlatlist = () => {
    return (
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
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F5F2F2'}}>
      <UserForm
        onFormSubmit={userObject => {
          //soo n so

          setListData([...listData, userObject]);
        }}
      />

      {renderFlatlist()}

      <Text>{jumpText}</Text>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      {renderModal()}
    </View>
  );
};

export default MyList;
