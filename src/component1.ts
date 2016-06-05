import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'comp1',
    template: `
        <h3>This is Component 1</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component1 {

    constructor(private router: Router) {
    }
    
    goTo(): void {
      this.router.navigate(['/comp1%comp2']);
    }
    
}
