import HomeScreen from '../containers/HomeScreen';
import UserDetailsFunt from '../controls/UserDetailsFunt';
import MyList from '../containers/MyList';
import ListItemDetails from '../containers/ListItemDetails';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const FlexTestView = props => {
    return (
      <View
        style={{
          flex: 3,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <View style={{backgroundColor: 'red', height: 80, width: 80}}></View>
        <View style={{backgroundColor: 'blue', height: 80, width: 80}}></View>
        <View style={{backgroundColor: 'green', height: 80, width: 80}}></View>
        <View
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            backgroundColor: 'pink',

            right: 50,
            bottom: 50,

            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{backgroundColor: 'red', height: 25, width: 25}}></View>
          <View style={{backgroundColor: 'blue', height: 25, width: 25}}></View>
          <View
            style={{backgroundColor: 'green', height: 25, width: 25}}></View>
        </View>
        <UserDetailsFunt />

        <TouchableOpacity
          onPress={() => {
            props.navigation.push('flexTestView');
          }}>
          <Text>Goto flex test, PUSH</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('flexTestView');
          }}>
          <Text>Goto flex test, NAVIGATE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Text>go back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.popToTop();
          }}>
          <Text>pop to top</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="myList"
        component={MyList}
        initialParams={{name: 'Victor'}}
      />
      <Stack.Screen name="listItemDetails" component={ListItemDetails} />
      <Stack.Screen name="My Home" component={HomeScreen} />
      <Stack.Screen name="flexTestView" component={FlexTestView} />
    </Stack.Navigator>
  );
};

export default Navigation;
