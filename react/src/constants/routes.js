import HomePage from '../pages/auth/home/HomePage';
import LoginPage from '../pages/auth/login/Login';
import CreateAccount from '../pages/auth/createAccount/CreateAccount';
import Questionaire from '../pages/Questionaire/Questionaire';
import Dashboard from '../pages/dashboard/Dashboard';
import {CREATE_URL,HOME_URL,LOGIN_URL,QUESTIONAIRE_URL,DASHBOARD_URL} from './url'

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

const  QUESTIONAIRE_ROUTE = {
    path:  QUESTIONAIRE_URL,
    Component: Questionaire,
};

const  DASHBOARD_ROUTE = {
    path:  DASHBOARD_URL,
    Component: Dashboard,
};

export const ROUTES = [LOGIN_ROUTE,HOME_ROUTE,CREATE_ROUTE,QUESTIONAIRE_ROUTE,DASHBOARD_ROUTE];
