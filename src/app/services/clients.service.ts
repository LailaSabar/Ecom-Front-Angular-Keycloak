import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecService } from './keycloak-sec.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecService) { }

  public getClients() {
    return this.http
      .get("http://localhost:8081/customers");
  }

}
