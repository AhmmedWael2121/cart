
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/Services/Products/products.service';
import { IProducts } from '../../Shared/Interfaces/Products/products';
import { CategoryService } from '../../Core/Services/Category/category.service';
import { ICategory } from '../../Shared/Interfaces/Category/icategory';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../Shared/Pipe/Search/search.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { ICart } from '../../Shared/Interfaces/Cart/icart';
import Swal from 'sweetalert2';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';
import { WishlistService } from '../../Core/Services/WishList/wishlist.service';
import { IWishlist } from '../../Shared/Interfaces/WishList/iwishlist';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    CarouselModule,
    SearchPipe,
    RouterLink,
    FormsModule,
    TranslatePipe,
    CurrencyPipe,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  
  private readonly _productsService = inject(ProductsService);
  private readonly _categoryService = inject(CategoryService);
  private readonly _cartService = inject(CartService);
  private readonly _WishlistService = inject(WishlistService);

  products: IProducts[] = [];
  category: ICategory[] = [];
  
  card: ICart = {} as ICart;
  wish: IWishlist = {} as IWishlist;
  
  count: number = 0;
  prodctSearch: string = '';

  ngOnInit(): void {
    this.getProducts();
    this.getCategoryList();
  }
  getProducts(): void {
    this._productsService.getproducts().subscribe({
      next: (data) => {
        this.products = data.data;
      },
    });
  }
  getCategoryList(): void {
    this._categoryService.getCategoryList().subscribe({
      next: (data) => {
        this.category = data.data;
      },
    });
  }
  addToCart(id: string): void {
    this._cartService.AddToCart(id).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: ' added to cart',
          showConfirmButton: false,
          timer: 1500,  customClass:{
            popup: 'custom-swal',
          }
        });
        this.card = data.data;
        this._cartService.count.next(data.numOfCartItems);
      },
    });
  }
addToWish(id: string): void {
  this._WishlistService.AddWishlist(id).subscribe({
    next: (data) => {

      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: ' added to wishlist',
        showConfirmButton: false,
        timer: 1500,
        customClass:{
          popup: 'custom-swal',
        }
      });
      this.wish = data.data
    },
  });
}
}
