import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  errors: string[] = [];

  ErrorCodes = {
    min: 'The minimum length is 10 characters',
    uppercase: 'At least one upper case character',
    digits: 'At least one numeric character',
    match: 'The two passwords have to match'
  };

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onRegister(): void {
    const formValues = this.registerForm.value;
    this.errors = [];
    if (formValues.password !== formValues.repeat) {
      this.errors = ['match'];
      return;
    }
    if (formValues.email && formValues.password && formValues.password == formValues.repeat) {
      this.authService.register(formValues.email, formValues.password).subscribe(
        () => {
          console.log('A new user was successfully created.');
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        response => {
          this.errors = response.error;
        }
      );
    }
  }
}
