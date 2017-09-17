import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ow-layout-main',
    template: `
        <main class="">
            <ol class="">
                <ow-layout-breadcrumbs></ow-layout-breadcrumbs>
            </ol>
            <div class="">
                <router-outlet></router-outlet>
            </div>
        </main>
    `
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
