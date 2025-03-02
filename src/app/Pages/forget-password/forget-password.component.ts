import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Core/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule,TranslatePipe],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  isLoading:boolean = false
  // inject Authentication service to get vertificaions
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  isVertify: boolean = false;
  steps: number = 1;
  vertifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  vertifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6}$/),
    ]),
  });
  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z]\w{7,}$/),
    ]),
  });

  vertifyEmailSumit() {
    this._authService.VerifyEmailSubmit(this.vertifyEmail.value).subscribe({
      next: (res) => {
       this.resetPassword.get("email")?.patchValue(this.vertifyEmail.get("email")?.value)
       
        this.isVertify = true;
        if(res.statusMsg ==="success"){
          this.isLoading = true
          this.steps = 2;
          this.isVertify = false

        }
        this.isLoading = false

      }
      
    });
  }

  vertifyCodeSumit() {
    this._authService.VerifyCodeSubmit(this.vertifyCode.value).subscribe({
      next: (res) => {
        this.isVertify = true;
        if(res.status ==="Success"){
          this.isLoading = true
          this.steps = 3;
          this.isVertify = false
          }
          this.isLoading = false

      }
    });
  }
  NewPassordSumit() {
    this._authService.RePassordSubmit(this.resetPassword.value).subscribe({
      next: (res) => {
        this.isLoading = true

        setTimeout(() => {
          //assign token in local storage
          localStorage.setItem("token",res.token)
          //validate token --> assign data from JWT
          this._authService.getUserData()
          //redirect to home page
          this._router.navigate(["/home"])
          this.isLoading = false
          
        }, 1500);

      }
    });
  }
}
