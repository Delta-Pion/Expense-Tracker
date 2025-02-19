import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService)

  if (accountService.accessObject()) {
    req = req.clone({
      setHeaders : {
        Authorization : `Bearer ${accountService.accessObject()?.accessToken}`
      }
    })
  }
  return next(req);
};
