import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';


export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const platform = inject(PLATFORM_ID);
 

  // Only run in the browser environment
  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem('token');

    // Add token to the request headers if it exists
    if (token) {
      req = req.clone({
        setHeaders: {
         token: token 
        }
      });
    }
  }

  // Handle the request and catch errors
return next(req)
  
};