import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    const val = this.loginForm.value;

    if (val.password && val.email) {
      this.authService.login(val.email, val.password).subscribe(
        () => {
          this.router.navigate(['../todos'], { relativeTo: this.route });
        },
        response => {
          this.errorMessage = response.error.message;
          console.log('errorMessage: ', this.errorMessage);
        }
      );
    }
  }
}
