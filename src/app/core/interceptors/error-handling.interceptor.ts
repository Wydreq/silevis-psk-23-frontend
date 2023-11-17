import { ManagePopupService } from './../services/manage-popup.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { PopupState } from 'src/app/shared/types/PopupState';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private popupService: ManagePopupService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.popupService.openDialog(PopupState.WARN, error.message);
        return throwError(() => 'ERROR: ' + error);
      })
    );
  }
}
