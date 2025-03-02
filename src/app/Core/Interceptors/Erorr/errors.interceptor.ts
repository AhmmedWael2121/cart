import { HttpInterceptorFn } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(catchError((err)=>{ 
     Swal.fire({
          position: "center",
          icon: "error",
          text: err.error.message,
          showConfirmButton: true,
          timer: 5000
         });
         console.log(err)

    return throwError(()=> err )
  }));
};
