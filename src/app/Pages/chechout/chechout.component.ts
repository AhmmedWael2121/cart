import { ICart } from './../../Shared/Interfaces/Cart/icart';

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../Core/Services/Payment/payment.service';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-chechout',
  imports: [ReactiveFormsModule,TranslatePipe],
  templateUrl: './chechout.component.html',
  styleUrl: './chechout.component.scss'
})
export class ChechoutComponent implements OnInit {
  checkooutForm!: FormGroup;
  private readonly _formBuilder = inject(FormBuilder)
  private readonly _paymentService = inject(PaymentService)
  private readonly _activatedRoute= inject(ActivatedRoute)
   CartId:string = "";

   cart!:ICart;

  ngOnInit(): void {
  this.initailForm();
  this.getCartId();
  }
  

  initailForm():void{
    this.checkooutForm = this._formBuilder.group({
  
      details :[null,Validators.required] ,
      phone: [null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
      city: [null,Validators.required] 
  
    });

  }

  getCartId(): void{
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.CartId = params.get('id')!;
        console.log(this.CartId);

        }
    })
  }

  OnlinePayment():void{
    this._paymentService.PostOnlinePayement(this.CartId,this.checkooutForm.value).subscribe({
      next: (res) => {
       if(res.status ==="success"){
         open(res.session.url,"_self");
       }
        console.log(res)
      }
    })
  }
cashPayment(): void {
  if (this.checkooutForm.valid) {
    this._paymentService.PostCashPayement(this.CartId, this.checkooutForm.value).subscribe({
      next: (res) => {
        if(res.status ==="success"){
            this.cart = {} as ICart;
        }
        // Add success message or redirect to success page
      }
    });
  } else {
    console.log('Form is invalid');
    // Add error message or display form errors
  }
}
  
}
