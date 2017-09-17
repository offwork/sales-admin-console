import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './card.component';
import { UiCardContentComponent } from './card-content.component';
import { UiCardFooterComponent } from './card-footer.component';
import { UiCardHeaderComponent } from './card-header.component';


const cards = [
    UiCardComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
    UiCardHeaderComponent,
];

@NgModule({
    declarations: [
        ...cards,
    ],
    exports: [
        ...cards,
    ],
    imports: [ CommonModule ]
})

export class UiCardModule {}
