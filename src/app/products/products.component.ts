import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  errorMessage: any;

  constructor(private suppliersService: ProductsService) { }

  ngOnInit(): void {
    
    this.suppliersService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      err => {
       this.errorMessage=err.error.error;
        
      }
    );
  }

}
