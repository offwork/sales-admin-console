import { Directive, HostListener } from '@angular/core'

/**
 * Allows the aside to be toggled via click.
 */
@Directive({
  selector: '.aside-toggle',
})

export class AsideToggleDirective {

    @HostListener('click', ['$event'])
    toggleOpen($event: any): void {
        $event.preventDefault();
    }
}