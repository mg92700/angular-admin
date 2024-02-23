import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoComponent } from './meteo/meteo.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'meteo', component: MeteoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }