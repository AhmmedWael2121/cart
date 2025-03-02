import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SearchPipe } from '../../Shared/Pipe/Search/search.pipe';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../Core/Services/Products/products.service';
import { IProducts } from '../../Shared/Interfaces/Products/products';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { ICart } from '../../Shared/Interfaces/Cart/icart';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [TranslatePipe, SearchPipe, RouterLink,FormsModule,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private readonly _productsService = inject(ProductsService);
  private readonly _cartService = inject(CartService);
  products: IProducts[] = [];
  card:ICart= {} as ICart;
  prodctSearch:string ='' 

  ngOnInit(): void {
    this.getAllProducts()
  }
  

  getAllProducts(): void {
    this._productsService.getproducts().subscribe({
      next: (data) => {
        this.products = data.data;
        console.log(data);
      },
    });
  }

  addToCart(id:string):void{
    this._cartService.AddToCart(id).subscribe({
    next: (data) =>{ 
     
        Swal.fire({
         position: "center",
         icon: "success",
         title: "Product added successfully!",
         showConfirmButton: false,
         timer: 1500
        });
        this.card = data.data
      
  
    }
    })
   
    }
}
