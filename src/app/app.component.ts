import { Component, OnInit } from '@angular/core';
import { KeycloakSecService } from './services/keycloak-sec.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private keycloakSecService: KeycloakSecService) { }
  title = 'ecom-app';
  
  isAuth = false;
  keycloak: any;
  userInformations: any;
  ngOnInit() {
    this.keycloak = this.keycloakSecService.kc;
    console.log(this.keycloak);
    // console.log('hasRealmRole', this.keycloak.hasRealmRole('app-manager'));
    // console.log('hasResourceRole', this.keycloak.hasResourceRole('app-manager'));
    this.isAuth = this.keycloak.authenticated;
    this.userInformations = this.isAuth ? this.keycloak.idTokenParsed : {};
  }

  onLogin() {
    this.keycloak.login();
  }
  onLogout() {
    this.keycloak.logout();
  }
  ManageAccount() {
    this.keycloak.accountManagement();
  }
  isProductsManager() {
    return this.keycloak.hasRealmRole('PRODUCT_MANAGER');
  }
  isClientsManager() {
    return this.keycloak.hasRealmRole('CUSTOMER_MANAGER');
  }
  isBillsManager() {
    return this.keycloak.hasRealmRole('BILLING_MANAGER');
  }

}
