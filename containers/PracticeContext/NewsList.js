import {View, Text} from 'react-native';
import NewsReporter from './NewsReporter';

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

export default NewsList;
