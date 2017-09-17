import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ow-layout-header-domains',
  template: `
    <li class="" dropdown>
      <a class=""
         data-toggle="dropdown" 
         role="button" aria-haspopup="true" 
         aria-expanded="false" dropdownToggle>
        <span *ngIf="!activeDomain" class="alert alert-danger">
          Please select a domain
        </span>
        <span *ngIf="activeDomain">
          {{activeDomain.name}}
        </span>
      </a>
      <div class="" *dropdownMenu aria-labelledby="simple-dropdown">
        <a *ngFor="let domain of domains" (click)="switchDomain($event, domain)"
           [ngClass]="{ 'active': domain === activeDomain }" class="" href="" >
          <i class=""></i>
          {{domain.name}}
        </a>
      </div>
    </li>
  `,
})

export class HeaderDomainsComponent implements OnInit {
    public activeDomain   : any;
    public domains        : any;

    constructor() {}

    ngOnInit() {}

    switchDomain($event, domain) {
        $event.preventDefault()
    }

}
