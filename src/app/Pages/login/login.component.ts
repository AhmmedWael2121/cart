import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Core/Services/Auth/auth.service';

import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   errorMessage:string ="";
    success:string ="";

    private readonly _authService = inject(AuthService);
    private readonly _router = inject(Router);
    loginForm: FormGroup = new FormGroup(
      {

        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[A-Z]\w{7,}$/),
        ]),
      },
    );
  
    submitForm(): void {
      if (this.loginForm.valid) {
        this._authService.sendLogin(this.loginForm.value).subscribe({
          next: (res) => {
            if(res.message === "success"){
              this.success = res.message;
              setTimeout(() => {

                //assign token in local storage
                localStorage.setItem("token",res.token)
                //validate token --> assign data from JWT
                this._authService.getUserData()
                //redirect to home page
                this._router.navigate(["/home"])
          
                
              }, 1500);

            }

          }
        });

      }
    }
}
