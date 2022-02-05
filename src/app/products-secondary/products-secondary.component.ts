import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-secondary',
  templateUrl: './products-secondary.component.html',
  styleUrls: ['./products-secondary.component.css']
})
export class ProductsSecondaryComponent implements OnInit {

  productos = [
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
    {nombre:"Producto1", tipo:"Cosmetico", usos:"Rejuvenece", precio:"$500.00"},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
