import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const TestApiList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
      response
        .json()
        .then(responseData => {
          console.log(responseData);

          if (responseData && responseData.length > 0) {
            setListData(responseData);
          }
        })
        .catch(err => {
          console.log(err);
        }),
    );
  }, []);

  const renderListItem = ({item, index}) => {
    return (
      <View style={{margin: 10, borderBottomWidth: 0.5}}>
        <Text style={{paddingVertical: 5}}>title is: {item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>test flatlist {somekey.somevalue}</Text>

      <FlatList
        data={listData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default TestApiList;
