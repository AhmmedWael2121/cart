import { IWishlist } from './../../Shared/Interfaces/WishList/iwishlist';
import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WishlistService } from '../../Core/Services/WishList/wishlist.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  imports: [TranslatePipe,CurrencyPipe,RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  wishLists:IWishlist[] = [];
  
  private readonly _wishlistService = inject(WishlistService)
  ngOnInit(): void {
    this.GetWishList()
  }
  
  
  GetWishList():void{
  
    this._wishlistService.getWishlist().subscribe({
      next: (data) => {console.log(data),
        this.wishLists = data
      }
    })
  }
  RemoveWishListItem(id:string):void{
    this._wishlistService.RemveWishlistItem(id).subscribe({
      next: (data) => {console.log(data),
        this.wishLists = data
        }
        
    })

  }
  AddIntoWishList(id:string):void{
    this._wishlistService.AddWishlist(id).subscribe({
      next: (data) => {console.log(data),
        this.wishLists = data.data
        }
    })
  }

  RemoveWishList():void{
    this.wishLists = [];
    this.GetWishList();
  }
}
