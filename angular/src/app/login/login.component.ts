import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public isMatch = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  matchCredentials() {
     const usernameMatchWithFakeUsername = this.authenticationService.fakeUsername === this.loginForm.get('username').value;
     const passwordMatchWithFakePassword = this.authenticationService.fakePassword === this.loginForm.get('password').value;

    this.isMatch = usernameMatchWithFakeUsername && passwordMatchWithFakePassword;
  }

  login(): void {
    // @ts-ignore
    this.matchCredentials();
    let username = this.loginForm.get('username').value;
    // @ts-ignore
    let password = this.loginForm.get('password').value;
    this.authenticationService.login(username, password).subscribe(() => this.router.navigateByUrl(""));
  }

}
