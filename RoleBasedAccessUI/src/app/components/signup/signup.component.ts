import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  name: string = '';
  userName: string = '';
  password: string = '';
  constructor(private fb : FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      Name:['', Validators.required],
      userName:['', Validators.required],
      password:['', Validators.required]
    })
  }


  onSubmit() {
    if (this.signUpForm.valid) {
      let signUpObj = {
        ...this.signUpForm.value,
        name: this.signUpForm.value.name,
        userName: this.signUpForm.value.userName,
        password: this.signUpForm.value.password
      }
      this.auth.signUp(signUpObj)
      .subscribe({
        next:(res=>{
          this.signUpForm.reset();
          this.router.navigate(['login']);
          alert(res.message)
        }),
        error:(err=>{
          alert(err?.error.message)
        })
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm);
    }
  }
}
