import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../screen/main/main.component';
import { ListaProductosComponent } from '../screen/lista-productos/lista-productos.component';

import { DetalleProductosComponent } from '../screen/detalle-productos/detalle-productos.component';
import {CopleteBuyComponent} from '../app/coplete-buy/coplete-buy.component'
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'productos', component: ListaProductosComponent },  
  { path: 'Producto', component: DetalleProductosComponent },
  
  { path: 'carrito', component: CopleteBuyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
