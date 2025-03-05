import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const homeGuardGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    if ( localStorage.getItem('token')) {
      return true;
      }
      router.navigate(['/login']);
      return false;
  }
  return false

};
