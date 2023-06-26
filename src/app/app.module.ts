import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

import { SalonesComponent } from './salones/salones.component';
  import { AgataComponent } from './formPresup/agata/agata.component';
  import { FluoritaComponent } from './formPresup/fluorita/fluorita.component';
  import { GranateComponent } from './formPresup/granate/granate.component';
  import { TurquesaComponent } from './formPresup/turquesa/turquesa.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ContactoComponent,
    SalonesComponent,
    AgataComponent,
    FluoritaComponent,
    GranateComponent,
    TurquesaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
