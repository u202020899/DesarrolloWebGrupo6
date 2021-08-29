import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicioComponent } from "./pages/inicio/inicio.component";
import { RegistroUsuariosComponent } from "./pages/usuarios/registro-usuarios/registro-usuarios.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuarios/registro-usuario', component: RegistroUsuariosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}