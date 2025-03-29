import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message = ''

  loginId = ''

  password = ''

  constructor(private route: Router) {

  }

  signIn() {
    console.log('in sign in method')

    if (this.loginId == 'admin' && this.password == 'admin') {
      console.log('Login ID: ', this.loginId)
      console.log('Password: ', this.password)
      this.route.navigateByUrl('welcome')
    } else {
      this.message = 'login & password invalid'
    }
  }

  signUp() {
    this.route.navigateByUrl('signup')
  }
}