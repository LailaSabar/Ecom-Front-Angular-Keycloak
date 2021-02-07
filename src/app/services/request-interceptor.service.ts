import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakSecService } from './keycloak-sec.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor(private securityService: KeycloakSecService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request interceptor ...');
    if (!this.securityService.kc.authenticated) return next.handle(req);
    let request=req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.securityService.kc.token
      }
    });
    return next.handle(request);
  }
}
