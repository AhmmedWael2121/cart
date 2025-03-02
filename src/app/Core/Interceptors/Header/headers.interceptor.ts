import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const platform = inject(PLATFORM_ID);
  const router = inject(Router);

  // Only run in the browser environment
  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem('token');

    // Add token to the request headers if it exists
    if (token) {
      req = req.clone({
        setHeaders: {
         "token": token 
        }
      });
    }
  }

  // Handle the request and catch errors
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Redirect to login page if unauthorized
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};