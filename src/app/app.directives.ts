// tslint:disable-next-line: max-line-length
// Origingally taken from https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts
// Used under the MIT License
  
// This whole unit was added for Step 14

import { Directive, ElementRef, HostListener } from '@angular/core';
import { KeyValues } from './app.consts';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[phoneDigitsOnly]'
})
export class PhoneCharactersOnlyDirective {
  inputElement: HTMLElement;
  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    // if CTRL or CMD (Mac) key is down, then let cut/copy/paste through
    if (e.ctrlKey === true || e.metaKey === true) {
      if (KeyValues.cutPasteKeys.indexOf(e.key) !== -1) {
        return;
      }
    }

    // if the key is a phone or navigation key, let it through
    if (
      KeyValues.navigationKeys.indexOf(e.key) !== -1 ||
      KeyValues.OkForPhoneInputControl.indexOf(e.key) !== -1
    ) {
      return;
    }

    // If they key is a not a number, prevent default
    if (!(KeyValues.Numbers.indexOf(e.key) !== -1)) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData
      .getData('text/plain')
      .replace(/\D/g, ''); // get a digit-only string
    document.execCommand('insertText', false, pastedInput);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    const textData = event.dataTransfer.getData('text').replace(/\D/g, '');
    this.inputElement.focus();
    document.execCommand('insertText', false, textData);
  }
}
