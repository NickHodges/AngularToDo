import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  errors: string[] = [];

  ErrorCodes = {
    min: 'The minimum length for a password is 10 characters',
    uppercase: 'You password mus have at least one upper case character',
    digits: 'Your password must have at least one numeric character',
    error_user: 'Could not create user'
  };

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onRegister(): void {
    const formValues = this.registerForm.value;
    if (formValues.email && formValues.password && formValues.password == formValues.repeat) {
      this.authService.register(formValues.email, formValues.password).subscribe(
        () => {
          console.log('A new user was successfully created.');
        },
        response => (this.errors = response.error.errors)
      );
    }
  }
}
