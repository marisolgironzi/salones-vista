// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Angular Materiak

// Components
import { InicioComponent } from './inicio/inicio.component';
import { SalonesComponent } from './salones/salones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AgataComponent } from './formPresup/agata/agata.component';
import { FluoritaComponent } from './formPresup/fluorita/fluorita.component';
import { GranateComponent } from './formPresup/granate/granate.component';
import { TurquesaComponent } from './formPresup/turquesa/turquesa.component';
import { RespuestaPresupComponent } from './formPresup/respuesta-presup/respuesta-presup.component';
import { RespuestaContactoComponent } from './contacto/respuesta-contacto/respuesta-contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full' },

  { path: 'inicio', component: InicioComponent },

  { path: 'salones', component: SalonesComponent },
    { path: 'agata', component: AgataComponent },
    { path: 'fluorita', component: FluoritaComponent },
    { path: 'granate', component: GranateComponent },
    { path: 'turquesa', component: TurquesaComponent },
    { path: 'respuestaPresup', component: RespuestaPresupComponent },

  { path: 'contacto', component: ContactoComponent },
    { path: 'respuestaContacto', component: RespuestaContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
