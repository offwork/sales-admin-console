import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ow-layout-sidebar',
  template: `
    <div class="">
      <nav class="">
        <ul class="">
          <li *ngFor="let nav of sidebarNav" class="">
            <span *ngIf="nav.type === 'title'">{{nav.label}}</span>
            <a *ngIf="nav.type !== 'title'" class="" routerLinkActive="active" [routerLink]="nav.link">
              <i *ngIf="nav.icon" class=""></i>
              {{nav.label}}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: []
})

export class SidebarComponent implements OnInit {

    public sidebarNav: any[];

    constructor() {}

    ngOnInit() {}

}
