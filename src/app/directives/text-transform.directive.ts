import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[textTransform]'
})
export class TextTransform{
    @Input() textCase: string;
    constructor(private el: ElementRef){}
    @HostListener ('blur') onblur(){
        this.el.nativeElement.style.textTransform = this.textCase;
    }
}