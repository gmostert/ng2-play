import {provideRouter, RouterConfig} from '@angular/router';
import {Component1} from './component1.js';
import {Component2} from './component2.js';
import {Component3} from './component3.js';

export const Routes: RouterConfig = [
    { path: '', redirectTo: '/comp1', terminal: true },
    { path: 'comp1', component: Component1 },
    { path: 'comp1/comp2', component: Component2 },
    { path: 'comp1/comp2/comp3', component: Component3 }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(Routes)
];