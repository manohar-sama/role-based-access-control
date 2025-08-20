import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  userName: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private userStore: UserStoreService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userName = this.loginForm.value.userName;
      this.password = this.loginForm.value.password;
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.auth.storeToken(res.accessToken);
          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          alert("SUCCESS: " + res.message);
          this.router.navigate(['dashboard'])
        },
        error: (err) => {
          alert("ERROR: Something went wrong!");
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }

}
