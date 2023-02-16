/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import MainScreen from './app/src/ui/main';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <SafeAreaView>
      <View>
    {/* <ScrollView style={backgroundStyle}> */}
      <MainScreen />
    {/* </ScrollView> */}

      </View>
    </SafeAreaView>
  );
}



export default App;
