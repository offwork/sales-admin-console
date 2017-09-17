
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ow-layout-header-nav',
  template: `
    <li class="" *ngFor="let item of items">
        <a class="" routerLinkActive="active" [routerLink]="item.link">
            <i *ngIf="item.icon" [class]="item.icon"></i>
            <ng-template *ngIf="item.label">{{item.label}}</ng-template>
        </a>
    </li>
  `
})

export class HeaderNavComponent implements OnInit {

    public items;

    constructor() {}

    ngOnInit() {}

}
