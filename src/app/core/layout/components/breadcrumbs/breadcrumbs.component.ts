import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ow-layout-breadcrumbs',
    template: `
        <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
            <li class="" *ngIf="breadcrumb.label.title" [ngClass]="{active: last}">
                <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
                <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
            </li>
        </ng-template>
        &nbsp;
    `
})

export class BreadcrumbsComponent implements OnInit {

    public breadcrumbs: Array<Object>;

    constructor() { }

    ngOnInit() { }
}
