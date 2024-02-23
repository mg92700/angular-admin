import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import du module pour le menu latéral
import { MatListModule } from '@angular/material/list'; // Import du module pour mat-nav-list




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [httpInterceptorProviders, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }