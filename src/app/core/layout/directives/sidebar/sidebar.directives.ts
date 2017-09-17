import { Directive, HostListener } from '@angular/core'

/**
 * Allows the sidebar to be toggled via click.
 */
@Directive({
  selector: '.sidebar-toggle',
})

export class SidebarToggleDirective {

    // Check if element has class
    private static hasClass(target: any, elementClassName: string): boolean {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
    }

    // Toggle element class
    private static toggleClass(elem: any, elementClassName: string): void {}

    @HostListener('click', ['$event'])
    toggleOpen($event: any): void {
        $event.preventDefault();
    }
}

@Directive({
  selector: '[mobile-nav-toggle]',
})

export class MobileSidebarToggleDirective {

    // Check if element has class
    private static hasClass(target: any, elementClassName: string): boolean {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
    }

    // Toggle element class
    private static toggleClass(elem: any, elementClassName: string): void {}

    @HostListener('click', ['$event'])
    toggleOpen($event: any): void {
        $event.preventDefault();
    }
}

/**
 * Allows the off-canvas sidebar to be closed via click.
 */
@Directive({
  selector: '.sidebar-close',
})

export class SidebarOffCanvasCloseDirective {

    // Check if element has class
    private static hasClass(target: any, elementClassName: string): boolean {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
    }

    // Toggle element class
    private static toggleClass(elem: any, elementClassName: string): void {}

    @HostListener('click', ['$event'])
    toggleOpen($event: any): void {
        $event.preventDefault();
    }
}
