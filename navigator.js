import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Login from './Login'
import Register from './Register'
import Welcome from './Welcome'


const ScreenStack=createStackNavigator({
    LoginScreen:{
        screen:Login,
        
    },
    RegisterScreen:{
        screen:Register
    },
    Welcome:{
        screen:Welcome,
        navigationOptions:{
            headerShown:false
        }
        
    }
},
{
    initialRouteName:'Welcome'
}
)

export default createAppContainer(ScreenStack)
