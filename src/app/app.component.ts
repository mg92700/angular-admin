import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { EventBusService } from './_shared/event-bus.service';
import StorageService from './_services/session/storage-service';
import { AuthService } from './_services/authentification/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;

  email?: string;

  eventBusSub?: Subscription;


  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
     private router: Router ,
   
  ) { this.authService.isLoggedIn$.subscribe((value: boolean) => {
    this.isLoggedIn = value;
  });}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
 

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


      this.email = user.email;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {       
        this.storageService.clean();
        this.isLoggedIn = false; // Définir isLoggedIn à false
        this.router.navigate(['/login']); // Redirection vers la page de login
        this.isLoggedIn =false;
        this.authService.logout();
   
    }

   
}
