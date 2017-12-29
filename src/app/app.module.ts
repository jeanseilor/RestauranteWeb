import { HomeModule } from './home/home.module';
import { RestauranteService } from './restaurante.service';
import { PratoModule } from './prato/prato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PratoService } from './prato.service';
import { ApiService } from './api.service';
import { PratoDetalheComponent } from './prato-detalhe/prato-detalhe.component';
import { AppRoutingModule } from './app-routing.module';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ApiServiceRestaurante } from './api.service-restaurante';
import { RestauranteModule } from './restaurante/restaurante.module';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PratoDetalheComponent,
    RestauranteDetalheComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RestauranteModule,
    PratoModule,
    AppRoutingModule,
    FormsModule,
    HomeModule
  ],
  providers: [PratoService, ApiService, ApiServiceRestaurante, RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
