import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecService } from './keycloak-sec.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecService) { }

  public getProducts() {
    return this.http
      .get("http://localhost:8082/products");
  }
}