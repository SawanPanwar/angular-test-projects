import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // message = ''
  // loginId = ''
  // password = ''

  form: any = {
    data: {},
    message: ''
  }


  constructor(private router: Router, private httpClient: HttpClient) {

  }

  signIn() {
    this.httpClient.post('http://localhost:8080/Auth/login', this.form.data).subscribe((res: any) => {
      if (res.success && res.result.data != null) {
        localStorage.setItem('firstName', res.result.data.firstName)
        localStorage.setItem('roleName', res.result.data.roleName)
        this.router.navigateByUrl('welcome');
      }
    })
  }

  // signIn() {
  //   console.log('in sign in method')
  //   if (this.loginId == 'admin' && this.password == 'admin') {
  //     console.log('Login ID: ', this.loginId)
  //     console.log('Password: ', this.password)
  //     this.route.navigateByUrl('welcome')
  //   } else {
  //     this.message = 'login & password invalid'
  //   }
  // }

  signUp() {
    this.router.navigateByUrl('signup')
  }
}