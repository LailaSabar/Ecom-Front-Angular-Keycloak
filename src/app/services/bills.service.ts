import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecService } from './keycloak-sec.service';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecService) { }

  public getBills() {
    return this.http
      .get("http://localhost:8083/bills");
  }
}
