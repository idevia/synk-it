

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
  
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.authService
      .register(this.email, this.password)
      .then(res => {
        this.router.navigate(["/dashboard"]);
      })
      .catch(err => console.log(err.message));
  }
}
