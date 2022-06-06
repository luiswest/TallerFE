import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component'
import { ArtefactoComponent } from './components/artefacto/artefacto.component'
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'artefacto', component: ArtefactoComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
