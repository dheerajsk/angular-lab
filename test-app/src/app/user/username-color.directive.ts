import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[userColor]'
})
export class UsernameColorDirective {

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'color', 'red');
  }

}
