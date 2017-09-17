import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ow-layout-header',
  template: `
    <header class="">
      <div class="">
        <button class="" type="button" mobile-nav-toggle>&#9776;</button>
        <a class="" href="" [routerLink]="['/']"></a>
        <ul class="">
          <li class="">
            <a class="" href="#">&#9776;</a>
          </li>
          <ow-layout-header-nav></ow-layout-header-nav>
        </ul>
        <ul class="">
          <ow-layout-header-domains></ow-layout-header-domains>
          <ow-layout-header-user></ow-layout-header-user>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    @media (max-width: 991px) {
      a.navbar-brand {
        width: 155px!important;
        margin-left: 60px!important
      }
    }
  `],
})

export class HeaderComponent implements OnInit {

    public config: any;

    constructor() {}

    ngOnInit() {}

}
