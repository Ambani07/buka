import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'buka-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage: string = '';

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe(
      (params) => {
        if(params['registered'] === 'success'){

          this.notifyMessage = 'You have been successfully registered, you can login now!';
        }
      }
    );
  }

  isInvalidForm(fieldName):boolean{
    return this.loginForm.controls[fieldName].invalid && 
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  isRequired(fieldName):boolean{
    return this.loginForm.controls[fieldName].errors.required
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,
                  Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.auth.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/books']);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
        
      }
    );
  }

}
