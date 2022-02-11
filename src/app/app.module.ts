import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroVideoComponent } from './hero-video/hero-video.component';
import { ProductsMainComponent } from './products-main/products-main.component';
import { ProductsSecondaryComponent } from './products-secondary/products-secondary.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from '../screen/main/main.component';
import { ListaProductosComponent } from '../screen/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from '../screen/detalle-productos/detalle-productos.component';
import { BigCalltoActionComponent } from './big-callto-action/big-callto-action.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CopleteBuyComponent } from './coplete-buy/coplete-buy.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroVideoComponent,
    ProductsMainComponent,
    ProductsSecondaryComponent,
    FooterComponent,
    MainComponent,
    ListaProductosComponent,
    DetalleProductosComponent,
    BigCalltoActionComponent,
    CategoriasComponent,
    CopleteBuyComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
