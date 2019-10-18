// This file was added for Step 17
// Can be added with `ng generate directive highlightOnHover`

import {
  Directive,
  OnInit,
  HostBinding,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlightOnHover]',
})
export class HighlightOnHoverDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @Input('highlightOnHover') value: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseOnElement() { // can take (eventData: Event) if you want access to the event itself)
    this.backgroundColor = this.value;
  }

  @HostListener('mouseleave') mouseNotOnElement() {
    this.backgroundColor = 'transparent';
  }
}
