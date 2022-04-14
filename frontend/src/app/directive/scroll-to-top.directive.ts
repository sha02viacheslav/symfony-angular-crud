import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[scrollToTop]'
})
export class ScrollToTopDirective {
    @HostListener('click')
    public onClick() {
        if (window && window.pageYOffset) {
            window.scroll(0, 0);
        }
    }
}