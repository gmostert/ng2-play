import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'comp2',
    template: `
        <h3>This is Component 2</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component2 {

    constructor(private router: Router) {
    }
    
    goTo(): void {
      this.router.navigate(['/comp1/comp2/comp3']);
    }
    
}