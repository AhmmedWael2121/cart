import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Core/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,TranslatePipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  errorMessage:string ="";
  success:string ="";
  isLoaing : boolean = false;
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z]\w{7,}$/),
      ]),
      rePassword: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    { validators: this.confirmPassword }
  );

  submitForm(): void {
    if (this.registerForm.valid) {
      this.isLoaing = true
      this._authService.sendRegister(this.registerForm.value).subscribe({
        next: (res) => {
          if(res.message === "success"){
        
            this.success = res.message;
            setTimeout(() => {
              this._router.navigate(["/login"])
              
            }, 1500);
            this.isLoaing = false;
          }
        }
      });
    }
  }

  // asbstractControl is superClass from fromGroup
  confirmPassword(pass: AbstractControl) {
    const password = pass.get('password')?.value;
    const rePassword = pass.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }
}
