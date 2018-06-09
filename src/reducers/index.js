/**
 * Created by admin on 2017/3/3.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import login from './login.js';
import tabBarSelect from './tabBar';
import homeList from './homeList';

//import tabBar from './tabBar.js';

export default combineReducers({
  login,
	tabBarSelect,
  homeList,
  form: formReducer,
    //tabBar
})