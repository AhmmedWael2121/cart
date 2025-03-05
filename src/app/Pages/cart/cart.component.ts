
import { Component, inject, OnInit } from '@angular/core';
import { ICart } from '../../Shared/Interfaces/Cart/icart';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink,TranslatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cardProducts: ICart = {} as ICart;
  private readonly _cartService = inject(CartService);

  ngOnInit(): void {
    this.getCartProducts();

  }
  
  getCartProducts(): void {
    this._cartService.GetCartProducts().subscribe({
      next: (data) => {
        this.cardProducts = data.data;
      }
    });
  }
  RemoveAllProdducts():void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "rounded-lg px-3 py-2 bg-green-500 hover:bg-green-700 ",
        cancelButton: "rounded-lg px-3 py-2 bg-red-500 hover:bg-red-700"
      },
      buttonsStyling: true
    });
    // disable btn if the cart is empty
    if(this.cardProducts.totalCartPrice){
      swalWithBootstrapButtons.fire({
        position:"top-right",
        title: "Are you sure?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
              this._cartService.count.next(0);
              this.cardProducts = {}as ICart;

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: " deleted successfully!",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            icon: "error"
          });
        }
      });
    }
  }
  removeCartProduct(id:string):void{
    this._cartService.RemoveCartProducts(id).subscribe({
      next: (data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.cardProducts =data.data
            this._cartService.count.next(data.numOfCartItems)
            Swal.fire({
              title: "Deleted successfully!",
              icon: "success"
            });
          }
        });
        }
          });
  }

  UpdateQty(id:string,count:number){
    this._cartService.UpdateCartQty(id,count).subscribe({
      next: (data) => {
        this.cardProducts = data.data
        }
    });
  }
}
