//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './app.js';
import {APP_ROUTER_PROVIDERS} from './routes.js';
import {BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';

bootstrap(App, [
  APP_ROUTER_PROVIDERS, 
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  BreadcrumbService
]).catch(err => console.error(err));