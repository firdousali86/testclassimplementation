import {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import {
  HomeScreen,
  MyList,
  ListItemDetails,
  PracticeContext,
} from '../containers';
import {EventRegister} from 'react-native-event-listeners';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = props => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    const listener = EventRegister.addEventListener(
      'myFirstEmittedEvent',
      data => {
        console.log(data);
      },
    );
  }, []);

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

        <TouchableOpacity
          onPress={() => {
            props.navigation.push('My Home');
          }}>
          <Text>Goto Home, PUSH</Text>
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

        <TouchableOpacity
          onPress={() => {
            props.navigation.jumpTo('myList', {
              owner: 'Edward can witness this',
            });
          }}>
          <Text>Jump tab</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.push('practiceContext');
          }}>
          <Text>Practice context</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getHomeStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="flexTestView" component={FlexTestView} />
        <Stack.Screen
          name="My Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => {
                  alert('This is a button!');

                  //logout functionality
                }}
                title="Log out"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen
          name="myList"
          component={MyList}
          initialParams={{name: 'Victor'}}
        />
        <Stack.Screen name="listItemDetails" component={ListItemDetails} />
        <Stack.Screen name="practiceContext" component={PracticeContext} />
      </Stack.Group>
    );
  };

  // const getTabNavigator = () => {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen
  //         name="myList"
  //         component={MyList}
  //         options={{tabBarLabel: 'My List'}}
  //       />
  //       <Tab.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{tabBarLabel: 'Dashboard'}}
  //       />
  //       <Tab.Screen
  //         name="Settings"
  //         component={FlexTestView}
  //         options={{tabBarLabel: 'My Settings'}}
  //       />
  //     </Tab.Navigator>
  //   );
  // };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="flexTestView" component={FlexTestView} />
      </Stack.Group>
    );
  };

  // return getTabNavigator();

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getHomeStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
