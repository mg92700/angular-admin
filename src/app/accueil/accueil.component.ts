import { Component, OnInit } from '@angular/core'; // Import du module pour le menu latéral
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
const USER_EMAIL = 'email';
const USER_KEY = 'token';
const USER_ROLE = 'role';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [  MatMenuModule,MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  implements OnInit{

  userEmail: string ='';

  constructor() { }

  ngOnInit(): void {
    // Récupérer l'e-mail de l'utilisateur depuis le sessionStorage
    const userStr = window.sessionStorage.getItem(USER_KEY);
    if (userStr !== null) {
      const user = JSON.parse(userStr); 
      const userData = JSON.parse(userStr);
      this.userEmail = userData ? userData.email : ''; 
    }// Utiliser l'e-mail stocké ou une chaîne vide
  }
}
