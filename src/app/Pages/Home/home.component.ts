import { Product } from './../../Shared/Interfaces/Cart/icart';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/Services/Products/products.service';
import { IProducts,  } from '../../Shared/Interfaces/Products/products';
import { CategoryService } from '../../Core/Services/Category/category.service';
import { ICategory } from '../../Shared/Interfaces/Category/icategory';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../Shared/Pipe/Search/search.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { ICart } from '../../Shared/Interfaces/Cart/icart';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ButtonModule,CarouselModule,SearchPipe,RouterLink ,FormsModule,TranslatePipe,CurrencyPipe],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly _productsService = inject(ProductsService)
  private readonly _categoryService = inject(CategoryService)
  private readonly _cartService = inject(CartService)
  private readonly _cgxSpinnerService = inject(NgxSpinnerService)
  products:IProducts[] = [];
  category:ICategory[] = [];
  card:ICart= {} as ICart;
count:number = 0;
  prodctSearch:string ='' 
  
  
        ngOnInit(): void {
         this.getProducts();
         this.getCategoryList();

        }

  getProducts():void{
    this._productsService.getproducts().subscribe({
      
      next: (data) => {
        this.products = data.data
      }
       })
      }
  getCategoryList():void{
    this._categoryService.getCategoryList().subscribe({
      next: (data) => {
        this.category = data.data
      }
      });


  }
addToCart(id:string):void{
  this._cartService.AddToCart(id).subscribe({
  next: (data) =>{ 
   
      Swal.fire({
       position: "top-right",
       icon: "success",
       title: "Product added successfully!",
       showConfirmButton: false,
       timer: 1500
      });
      this.card = data.data
      this._cartService.count.next(data.numOfCartItems)
    

  }
  })
 
  }

}
