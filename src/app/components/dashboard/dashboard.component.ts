import { Component, OnInit } from '@angular/core';

export interface ProductTable {
  product: string;
  percentage: string;
}

const PRODUCT_DATA:ProductTable[] = [
    {product: 'Product 1', percentage: '89%'},
    {product: 'Product 2', percentage: '89%'},
    {product: 'Product 3', percentage: '89%'},
    {product: 'Product 4', percentage: '89%'},
    {product: 'Product 5', percentage: '89%'},
    {product: 'Product 6', percentage: '89%'},
    {product: 'Product 7', percentage: '89%'},
];
    
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
displayedColumns: string[] = ['product', 'percentage'];
dataSource = PRODUCT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
