import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<div fxLayout="column" fxLayoutAlign="center center" >
    <div class="mat-display-2">Hello, Lemonite!</div>

     <button mat-raised-button color="primary">Login</button>
    <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
</div>

   `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
