import { Component, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'ow-ui-card',
    template: `
        <div class="ui-card card {{classNames}}">
            <div *ngIf="hasHeader" #cardHeader class="card-header">
                <ng-content select="ow-ui-card-header"></ng-content>
            </div>
            <div *ngIf="hasContent" #cardContent class="card-block">
                <ng-content select="ow-ui-card-content"></ng-content>
            </div>
            <div *ngIf="!hasContent">
                <ng-content></ng-content>
            </div>
            <div *ngIf="hasFooter" #cardFooter class="card-footer">
                <ng-content select="ow-ui-card-footer?"></ng-content>
            </div>
        </div>
    `
})

export class UiCardComponent implements AfterViewInit {
    // By default display all the parts of the card
    hasContent: boolean = true;
    hasFooter: boolean = true;
    hasHeader: boolean = true;

    // Get a reference to the different sections
    @ViewChild('cardContent') cardContent;
    @ViewChild('cardFooter') cardFooter;
    @ViewChild('cardHeader') cardHeader;

    // Add additional classNames to a card
    @Input() classNames = '';

    constructor(private _changeDetectorRef: ChangeDetectorRef) {}

    // Determine visibility based on existence of child sections
    ngAfterViewInit() {
        this.hasContent = this.cardContent.nativeElement.querySelector('ow-ui-card-content');
        this.hasHeader = this.cardHeader.nativeElement.querySelector('ow-ui-card-header');
        this.hasFooter = this.cardFooter.nativeElement.querySelector('ow-ui-card-footer');
        this._changeDetectorRef.detectChanges();
    }
}
