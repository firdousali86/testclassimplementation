import React, {createContext, useContext} from 'react';
import {View, Text, ScrollView, VirtualizedList} from 'react-native';
import NewsList from './NewsList';
import {ReporterContext} from '../../helpers/ContextHelper';

// const ReporterContext = createContext();

const PracticeContext = props => {
  const nameOfReporter = 'James';
  const ageOfReporter = 35;

  const mytestarray = [
    {
      name: 'Firdous',
      department: 'Physics',
    },
    {
      name: 'Viktor',
      department: 'Maths',
    },
    {
      name: 'Anusha',
      department: 'English',
    },
    {
      name: 'Lakshmi',
      department: 'Chemistry',
    },
    {
      name: 'Edward',
      department: 'Maths',
    },
    {
      name: 'Vyes',
      department: 'Physics',
    },
    {
      name: 'Amjad',
      department: 'English',
    },
    {
      name: 'Mirella',
      department: 'Chemistry',
    },
    {
      name: 'Kal',
      department: 'Maths',
    },
    {
      name: 'Kiran',
      department: 'English',
    },
  ];

  // const myListView = () => {};

  const myListView = () => {
    return mytestarray.map(thisElement => {
      return (
        <View
          style={{
            padding: 10,
            borderColor: 'black',
            borderWidth: 0.5,
            margin: 10,
          }}>
          <Text>Name: {thisElement.name}</Text>
          <Text>Department: {thisElement.department}</Text>
        </View>
      );
    });
  };

  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemCount = _data => 50;

  const Item = ({title}) => (
    <View
      style={{
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 32,
        }}>
        {title}
      </Text>
    </View>
  );

  return (
    <ReporterContext.Provider
      value={{nameOfReporter: nameOfReporter, ageOfReporter: ageOfReporter}}>
      <View>
        <VirtualizedList
          initialNumToRender={4}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />

        <Text>context test</Text>
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
      </View>
    </ReporterContext.Provider>
  );
};

export default PracticeContext;
