// This file was added for Step 13

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidators } from '../app.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      form_name: ['', Validators.required],
      form_lastname: ['', Validators.required],
      form_email: ['', [Validators.required, Validators.email]],
      // NumberValidators added for Step 14
      form_phone: ['', [Validators.required, NumberValidators.phone()]],
      form_message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  get form_name() {
    return this.contactForm.get('form_name');
  }

  get form_lastname() {
    return this.contactForm.get('form_lastname');
  }

  get form_email() {
    return this.contactForm.get('form_email');
  }

  get form_phone() {
    return this.contactForm.get('form_phone');
  }

  get form_message() {
    return this.contactForm.get('form_message');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
