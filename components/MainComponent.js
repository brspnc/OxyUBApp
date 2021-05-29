import React, { Component } from 'react';
import Resources from './ResourcesComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Constants }  from 'expo-constants';

const  ResourcesNavigator = createStackNavigator(
    {
        Resources: { screen: Resources }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
               backgroundColor: '#faa508'
           },
           headerTintColor: 'black',
           headerTitleStyle: {
               color: 'black'
           },
           headerLeft: <Icon
               name='globe'
               type='font-awesome'
               iconStyle={styles.stackIcon}
               onPress={() => navigation.toggleDrawer()}
           />
       })
   }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: ResourcesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='globe'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
        {
            drawerBackgroundColor: '#faa508'
        }
    
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render () {
        return (
            <View>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;