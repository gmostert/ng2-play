import {Component} from '@angular/core'
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Component1} from './component1.js';
import {Component2} from './component2.js';
import {Component3} from './component3.js';
import {BreadcrumbComponent, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div class="container">
      <h1>Breadcrumb Example</h1>
      <breadcrumb></breadcrumb>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, BreadcrumbComponent]
})
@Routes([
    { path: '/comp1', component: Component1/*, useAsDefault: true*/},
    { path: '/comp1%comp2', component: Component2},
    { path: '/comp1%comp2%comp3', component: Component3}
])
export class App {
  
  constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
    breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
    breadcrumbService.addFriendlyNameForRoute('/comp1%comp2', 'Comp 2');
    breadcrumbService.addFriendlyNameForRoute('/comp1%comp2%comp3', 'Comp 3');
  }
  
  ngOnInit() {
    this.router.navigate(['/comp1']);
  }
}