import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

export const listInterceptors = [LoadingInterceptor, ErrorHandlingInterceptor];

export const AllInterceptors = listInterceptors.map((interceptor) => ({
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: interceptor,
}));
