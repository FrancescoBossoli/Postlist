import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    constructor(private element: ElementRef) {
        this.element.nativeElement.style.backgroundColor = "yellow";
    }
}
