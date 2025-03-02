import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);
 const _PLATFORM_ID=inject(PLATFORM_ID);
   if(isPlatformBrowser(_PLATFORM_ID)){
 
     if (localStorage.getItem('token') !== null){
       router.navigate(['/home']);
       return false;
       
      }
    }
   return true;
};
