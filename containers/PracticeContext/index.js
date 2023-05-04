import React, {createContext, useContext} from 'react';
import {View, Text} from 'react-native';

const ReporterContext = createContext();

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

const NewsList = props => {
  return (
    <View>
      <NewsReporter />
      <View>
        <Text>news1</Text>
      </View>
      <View>
        <Text>news2</Text>
      </View>
      <View>
        <Text>news3</Text>
      </View>
    </View>
  );
};

const NewsReporter = props => {
  const reporterInfo = useContext(ReporterContext);

  return (
    <View>
      <Text>Name: {reporterInfo.nameOfReporter}</Text>
      <Text>Age: {reporterInfo.ageOfReporter}</Text>
    </View>
  );
};
