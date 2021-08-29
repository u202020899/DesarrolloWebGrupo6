import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'habitaciones', component: HomeComponent },
    { path: 'habitaciones/detalles', component: HomeComponent },
    { path: 'reservas', component: HomeComponent },
    { path: 'servicios', component: HomeComponent },
    { path: 'contactenos', component: HomeComponent },
    {path: '', redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}