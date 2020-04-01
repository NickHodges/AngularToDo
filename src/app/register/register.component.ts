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
    this.authService.register(formValues.email, formValues.password).subscribe(() => {
      console.log('A new user was created.');
    }, console.error);
  }
}
