import { IWishlist } from './../../Shared/Interfaces/WishList/iwishlist';
import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WishlistService } from '../../Core/Services/WishList/wishlist.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { ICart } from '../../Shared/Interfaces/Cart/icart';

@Component({
  selector: 'app-wish-list',
  imports: [TranslatePipe,CurrencyPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  wishLists:IWishlist[] = [];
   card: ICart = {} as ICart;
  
  private readonly _wishlistService = inject(WishlistService)
  private readonly _cartService = inject(CartService)

  ngOnInit(): void {
    this.GetWishList()
  }
  
  
  GetWishList():void{
  
    this._wishlistService.getWishlist().subscribe({
      next: (data) =>
      {
        console.log(data)
        this.wishLists = data.data
      }
    })
  }
  RemoveWishListItem(id:string):void{
    this._wishlistService.RemveWishlistItem(id).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'deleted successfully!',
          showConfirmButton: false,
          timer: 1500,  customClass:{
            popup: 'custom-swal',
          }
        });
        this.wishLists = data.data;
        this.GetWishList()

        }
        
    })

  }
  AddIntoWishList(id:string):void{
    this._wishlistService.AddWishlist(id).subscribe({
      next: (data) => {console.log(data),
        this.wishLists = data.data
        this.GetWishList();
        }
    })
  }

    addToCart(id: string): void {
      this._cartService.AddToCart(id).subscribe({
        next: (data) => {
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'added successfully!',
            showConfirmButton: false,
            timer: 1500,  customClass:{
              popup: 'custom-swal',
            }
          });
          this.card = data.data;
          this._cartService.count.next(data.numOfCartItems);
          this.RemoveWishListItem(id);
        },
      });
    }
ClearWishList():void{
  this.wishLists = [];
  this.GetWishList();
}
}
