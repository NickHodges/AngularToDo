
// This file was added for Step 14

import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {
  static phone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const PHONE_REGEXP = /^[2-9]\d{2}-\d{3}-\d{4}$/;
      if (PHONE_REGEXP.test(control.value) || control.value.length === 0) {
        return null;
      }
      return {
        malformedPhoneNumber: true
      };
    };
  }
}
