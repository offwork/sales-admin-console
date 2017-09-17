
import { Component, Input } from '@angular/core'
import { UiTabLink } from '../tabs/tabs.interface'

@Component({
    selector: 'ow-ui-page',
    template: `
        <div class="card">
            <div class="card-header">
                <h5 *ngIf="title" class="my-2">{{title}}</h5>
                <ng-content select="header"></ng-content>
                <ow-ui-tabs [tabs]="tabs"></ow-ui-tabs>
            </div>
            <div class="card-block">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .card-header {
            padding-bottom: 0;
        }
    `],
})

export class UiPageComponent {
  @Input() public tabs: UiTabLink[];
  @Input() public title: string;
}
