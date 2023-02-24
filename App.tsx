import React from 'react';

import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import linking from './Global/Linking';



function Home(): JSX.Element {
  return (
    <View style={styles.Container}>
      <Text>
        Home
      </Text>
    </View>
  );
}

function Setting(): JSX.Element {
  return (
    <View style={styles.Container}>
      <Text>
        Setting
      </Text>
    </View>
  );
}
function Profile({ route }: any): JSX.Element {
  const { id } = route.params;
  return (
    <View style={styles.Container}>
      <Text>
        {id}
      </Text>
    </View>
  );
}

function Success({ route }: any): JSX.Element {
  const { token, id, exp } = route.params;
  return (
    <View style={styles.Container}>
      <Text>
        {token}
      </Text>
      <Text>
        {id}
      </Text>
      <Text>
        {exp}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          initialParams={{ id: 0 }} />
        <Stack.Screen
          name='Setting'
          component={Setting} />
        <Stack.Screen
          name='Success'
          component={Success}
          initialParams={{ token: "no token", id: "no id" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffbf'
  },

});

export default App;
