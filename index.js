/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Login'
import Register from './Register'


AppRegistry.registerComponent(appName, () => Login);
