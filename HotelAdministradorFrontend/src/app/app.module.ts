import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RegistroDetalleHabitacionComponent } from './pages/registro-detalle-habitacion/registro-detalle-habitacion.component';
import { TipoHabitacionComponent } from './pages/tipo-habitacion/tipo-habitacion.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { RegistroUsuariosComponent } from './pages/usuarios/registro-usuarios/registro-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuariosComponent,
    RegistroDetalleHabitacionComponent,
    TipoHabitacionComponent,
    HabitacionesComponent,
    CheckinComponent,
    ReservaComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
