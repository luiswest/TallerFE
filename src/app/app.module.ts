import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArtefactoComponent } from './components/artefacto/artefacto.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavBarComponent,
    ArtefactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (libreria : FaIconLibrary) {
    libreria.addIconPacks(fas);
   // libreria.addIcons(faPlus, faPencil, faTrashCan);
  }
}
