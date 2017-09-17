import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ow-layout-header-user',
  template: `
    <li class="" dropdown>
      <a class=""
         data-toggle="dropdown" 
         role="button" aria-haspopup="true" 
         aria-expanded="false" dropdownToggle>
        <img class="" [src]="user?.avatar">
        <span class="">
          {{user?.firstName}} {{user?.lastName}}
        </span>
      </a>
      <div class="" *dropdownMenu aria-labelledby="simple-dropdown">
        <a class="dropdown-item" [routerLink]="[ '/', 'profile' ]"><i class="icon-user"></i> Profile</a>
        <a class="dropdown-item" [routerLink]="[ '/', 'password' ]"><i class="icon-key"></i> Password</a>
        <a class="dropdown-item" [routerLink]="[ '/', 'logout' ]"><i class="fa fa-lock"></i> Logout</a>
      </div>
    </li>
  `,
  styles: [`
    .avatar {
      height: 50px;
      width: 50px;
    }
  `]
})

export class HeaderUserComponent implements OnInit {

    public user: any;

    constructor() {}

    ngOnInit() {}

}
