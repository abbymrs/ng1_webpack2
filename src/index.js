import angular from 'angular';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import 'bootstrap';

import MainCtrl from './index.controller';
import homeApp from './home/home';
import msgApp from './messages/messages';
import profileApp from './profile/profile';
import loginApp from './login/login';

import router from './routes';

import apiService from './common/api.service';

import popupDirective from './common/pop/popup.directive';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.less';
import './common/pop/popup.less';

angular.module('app', [
        'ui.router',
        'ui.router.state.events',
        ngResource,
        ngSanitize,
        'homeApp',
        'msgApp',
        'profileApp',
        'loginApp'
    ])
    .constant('baseUrl', '/api/')
    .config(router)
    .factory('apiService', apiService)
    .directive('popup', popupDirective)
    .controller('ctrl', MainCtrl)