import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../commons/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  feedback = '';

  loginForm: FormGroup = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  doLogin = () =>
    this.customerService
      .login(this.loginForm.value.user, this.loginForm.value.password)
      .subscribe(
        () => {
          this.persistSession();
          this.router.navigate(['home']);
        },
        () => this.feedback = 'invalid'
      )


  private persistSession() {
    const sessionExpirationDate = new Date();
    sessionExpirationDate.setHours(72);
    localStorage.setItem('user', this.loginForm.value.user);
    localStorage.setItem('sessionExpirationDate', sessionExpirationDate.toString());
  }
}
