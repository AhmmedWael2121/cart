import { Component, inject, input, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Core/Services/Auth/auth.service';
import { TranslateServices } from '../../Core/Services/Translate/translate.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CartService } from '../../Core/Services/Cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  private readonly _authService = inject(AuthService)
  private readonly _translateServices = inject(TranslateServices)
  private readonly _cartService = inject(CartService)
  countCartItems:number = 0;
  isLogin = input<boolean>(true)


  ngOnInit(): void {
    
    this.getProductCart();
    this.getNoOfCartItems();
  }

  logOut():void{
    this._authService.logOut();
  }

  changeLang(lang:string):void{
    this._translateServices.changeLang(lang);

  }
  getProductCart():void{
    this._cartService.GetCartProducts().subscribe({
      next: (data) => this._cartService.count.next(data.numOfCartItems)
    })
  }
  getNoOfCartItems():void{
    this._cartService.count.subscribe({
      next: (count) => this.countCartItems = count
    })

  }
}
