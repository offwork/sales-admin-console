import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ow-layout-footer',
    template: `
        <footer class="">
            <span class="" [innerHtml]="footerLeft"></span>
            <span class="" [innerHtml]="footerRight"></span>
        </footer>
    `
})

export class FooterComponent implements OnInit {
    public footerLeft   = '';
    public footerRight  = '';

    constructor() { }

    ngOnInit() { }
}
