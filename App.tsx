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

import {NavigationContainer} from '@react-navigation/native';
import {ErrorBoundary} from 'react-error-boundary';
import Navigation from './navigate';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [clicked, isClicked] = useState(false);

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <NavigationContainer>
      <ErrorBoundary
        fallback={
          <View style={{justify: 'center', alignItem: 'center', flex: 1}}>
            <Text style={{flex: 1}}>
              See! I know it broke, we are looking carefully into it! just
              ignore and restart this application, hopefully it will work!
            </Text>
          </View>
        }>
        <Navigation />
      </ErrorBoundary>
    </NavigationContainer>
  );
}

export default App;
