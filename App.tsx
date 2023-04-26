/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './containers/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetailsFunt from './controls/UserDetailsFunt';
import MyList from './containers/MyList';
import ListItemDetails from './containers/ListItemDetails';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [clicked, isClicked] = useState(false);

  const backgroundStyle = {
    flex: 1,
  };

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="myList" component={MyList} />
        <Stack.Screen name="listItemDetails" component={ListItemDetails} />
        <Stack.Screen name="My Home" component={HomeScreen} />
        <Stack.Screen name="flexTestView" component={FlexTestView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
