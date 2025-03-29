import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: any = {
    data: {},
    message: ''
  }

  constructor(private httpClient: HttpClient) {

  }

  signUp() {
    console.log('in sign up method')
    console.log('form => ', this.form)
    console.log('form => ', this.form.data)

    this.httpClient.post('http://localhost:8080/Auth/signUp', this.form.data).subscribe((res: any) => {
      console.log('res => ', res)
      console.log('res => ', res.result.data)
      console.log('res => ', res.result.message)
      this.form.message = res.result.message;
    })

  }
}
