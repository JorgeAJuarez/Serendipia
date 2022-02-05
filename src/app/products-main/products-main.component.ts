import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styles:[
  '@import "https://fonts.googleapis.com/css?family=Tangerine";'],
  styleUrls: ['./products-main.component.css'
  ]
})
export class ProductsMainComponent implements OnInit {
  
  productos = [
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
