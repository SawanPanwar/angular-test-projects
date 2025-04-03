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
    message: '',
    inputerror: {}
  }

  constructor(private httpClient: HttpClient) {

  }

  signUp() {
    console.log('in sign up method')
    console.log('form => ', this.form)
    console.log('form => ', this.form.data)

    this.httpClient.post('http://localhost:8080/Auth/signUp', this.form.data).subscribe((res: any) => {
      this.form.message = '';
      this.form.inputerror = {};

      if (res.result.message) {
        this.form.message = res.result.message;
      }

      if (!res.success) {
        this.form.inputerror = res.result.inputerror;
      }
    })

  }
}
