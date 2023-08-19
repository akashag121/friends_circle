import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = localStorage.getItem('token')
    if(userToken === null){
      return next.handle(request);
    }
    const modifiedReq = request.clone({
      headers: request.headers.set('authorization', `Bearer ${userToken}`),

    });
   

    console.log('modified req ', modifiedReq)
    return next.handle(modifiedReq);
  } 
}
