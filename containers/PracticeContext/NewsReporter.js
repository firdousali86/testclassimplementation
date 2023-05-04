import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ReporterContext} from '../../helpers/ContextHelper';

const NewsReporter = props => {
  const reporterInfo = useContext(ReporterContext);

  return (
    <View>
      <Text>Name: {reporterInfo?.nameOfReporter}</Text>
      <Text>Age: {reporterInfo?.ageOfReporter}</Text>
    </View>
  );
};

export default NewsReporter;
