import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  errorMessage: any;

  constructor(private suppliersService: ClientsService) { }

  ngOnInit(): void {
    
    this.suppliersService.getClients().subscribe(
      data => {
        this.clients = data;
      },
      err => {
       this.errorMessage=err.error.error;
        
      }
    );
  }

}
