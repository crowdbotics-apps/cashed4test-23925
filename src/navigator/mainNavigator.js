import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings194429Navigator from '../features/Settings194429/navigator';
import UserProfile194422Navigator from '../features/UserProfile194422/navigator';
import Settings194421Navigator from '../features/Settings194421/navigator';
import Settings194419Navigator from '../features/Settings194419/navigator';
import SignIn2194417Navigator from '../features/SignIn2194417/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings194429: { screen: Settings194429Navigator },
UserProfile194422: { screen: UserProfile194422Navigator },
Settings194421: { screen: Settings194421Navigator },
Settings194419: { screen: Settings194419Navigator },
SignIn2194417: { screen: SignIn2194417Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
