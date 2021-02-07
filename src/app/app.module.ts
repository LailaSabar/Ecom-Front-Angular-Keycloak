import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { BillsComponent } from './bills/bills.component';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakSecService } from './services/keycloak-sec.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/request-interceptor.service';

export function keycloakFactory(keycloakSecurityService: KeycloakSecService) {
   return () => keycloakSecurityService.init();
 }

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [KeycloakSecService], useFactory: keycloakFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
