
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { homeGuardGuard } from './Core/Guards/HomeAuth/home-guard.guard';
import { loginGuardGuard } from './Core/Guards/LoginAuth/login-guard.guard';


export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '',
    component: MainLayoutComponent,canActivate:[homeGuardGuard],
    children: [
      { path: 'home',  loadComponent: () => import('./Pages/Home/home.component').then(c => c.HomeComponent), title: 'Home',},
      { path: 'categories',  loadComponent: () => import('./Pages/categories/categories.component').then(c => c.CategoriesComponent), title: 'Categories' },
      { path: 'details/:productName',  loadComponent: () => import('./Pages/product-details/product-details.component').then(c => c.ProductDetailsComponent), title: 'product Details' },
      {path:"cart" , loadComponent:()=>import('./Pages/cart/cart.component').then(c=>c.CartComponent),title:"Cart"},
      {path:"checkout/:id",loadComponent:()=>import('./Pages/chechout/chechout.component').then(c=>c.ChechoutComponent),title:"Vertify"},
      {path:"product",loadComponent:()=> import('./Pages/products/products.component').then(c=>c.ProductsComponent),title:"Product"},
      {path:"wishList",loadComponent: ()=> import('./Pages/wish-list/wish-list.component').then(c=>c.WishListComponent),title:"wishList"}
    ]
  },
  {
    path:'',component:AuthLayoutComponent,canActivate:[loginGuardGuard],children:[
      
      {path:'login',loadComponent:()=>import('./Pages/login/login.component').then(c=>c.LoginComponent),title:"Login"},
      {path:'register',loadComponent:()=>import('./Pages/register/register.component').then(c=>c.RegisterComponent),title:"Register"},
      {path:'forget',loadComponent:()=>import('./Pages/forget-password/forget-password.component').then(c=>c.ForgetPasswordComponent),title:
        "ForgotPassword"},
      ]
    },
    { path: '**', component:NotFoundComponent, title:"ERROR 404" }


];