import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular/angular-csp.css';
import angular from 'angular';
import application from './application';

export default angular.bootstrap(document, [application.name]);
