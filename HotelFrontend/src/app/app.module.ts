import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { DetallesComponent } from './pages/habitaciones/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabitacionesComponent,
    ReservasComponent,
    ServiciosComponent,
    ContactenosComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
