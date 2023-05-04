import React, {createContext, useContext} from 'react';
import {View, Text} from 'react-native';
import NewsList from './NewsList';
import {ReporterContext} from '../../helpers/ContextHelper';

// const ReporterContext = createContext();

const PracticeContext = props => {
  const nameOfReporter = 'James';
  const ageOfReporter = 35;

  return (
    <ReporterContext.Provider
      value={{nameOfReporter: nameOfReporter, ageOfReporter: ageOfReporter}}>
      <View>
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
