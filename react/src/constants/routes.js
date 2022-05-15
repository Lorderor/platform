import HomePage from '../pages/auth/home/HomePage';
import LoginPage from '../pages/auth/login/login';
import CreateAccount from '../pages/auth/createAccount/CreateAccount';

const HOME_URL = '/home';
const LOGIN_URL = '/login';
const CREATE_URL = '/create';


const HOME_ROUTE = {
    path: HOME_URL,
    Component: HomePage,
};

const LOGIN_ROUTE = {
    path: LOGIN_URL,
    Component: LoginPage,
};

const  CREATE_ROUTE = {
    path:  CREATE_URL,
    Component: CreateAccount,
};

export const ROUTES = [LOGIN_ROUTE,HOME_ROUTE,CREATE_ROUTE];
