import { NgxSpinnerService } from 'ngx-spinner';
import { Component, inject, OnInit } from '@angular/core';
import { IProducts } from '../../Shared/Interfaces/Products/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Core/Services/Products/products.service';
import { CarouselModule } from 'primeng/carousel';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { ICart } from '../../Shared/Interfaces/Cart/icart';
import Swal from 'sweetalert2';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-product-details',
  imports: [CarouselModule,TranslatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  card : ICart ={}as ICart
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _productsService = inject(ProductsService);
  private readonly _cartService = inject(CartService);
  private readonly _router = inject(Router);


  productItems: IProducts = {} as IProducts;
  productId!: any;

  ngOnInit(): void {
    // to get Id from URL
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('productName');
        
      }
    });
    // to get product details from service
    this.getSpecificProduct(this.productId)
  }
exit():void{
  this._router.navigate(['/home'])
}
  getSpecificProduct(id: string) {

    // to get product details from API

    this._productsService.getSpecificProduct(id).subscribe({
      next: (response) => {
        this.productItems = response.data

      }
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
    
  }, // {itemCounts , Products  }
  

  })
 
  }
}
