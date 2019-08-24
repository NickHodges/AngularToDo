// This file was added for Step 18

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Unless]',
})
export class UnlessDirective {
  @Input() set Unless(condition: boolean) {
    // property has to be the same name.
    if (!condition) {
      // display tagged element
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // display nothing
      this.viewContainerRef.clear;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
