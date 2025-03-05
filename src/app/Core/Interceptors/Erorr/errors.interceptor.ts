import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    if(!req.url.includes("login")){
      return next(req).pipe(
        catchError((err) => {
          if(err.error.message !="You are not logged in. Please login to get access"){

            Swal.fire({
              position: 'top',
              icon: 'error',
              text: err.error?.message || 'An unknown error occurred',
              showConfirmButton: false,
              timer: 2000,
              customClass:{
                popup:"custom-swal"
              }
            });
          }
          return throwError(() => err);
        })
      );
    }
    else{
      return next(req);
    }
    }

  else {
    return next(req);
  };
}
