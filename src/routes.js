
import {createStackNavigator} from 'react-navigation';

import Login from './pages/login';
import Main from './pages/login';
import Cadastro from './pages/login';
import More from './pages/login';

const Routes = createStackNavigator({
    Login,
    Main,
    Cadastro,
    More
}); 

export default Routes;
