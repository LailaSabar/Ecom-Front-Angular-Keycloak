import { Component, OnInit } from '@angular/core';
import { BillsService } from '../services/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: any;
  errorMessage: any;

  constructor(private suppliersService: BillsService) { }

  ngOnInit(): void {
    
    this.suppliersService.getBills().subscribe(
      data => {
        this.bills = data;
      },
      err => {
       this.errorMessage=err.error.error;
        
      }
    );
  }
}
