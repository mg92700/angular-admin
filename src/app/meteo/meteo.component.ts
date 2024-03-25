import { Component, OnInit } from '@angular/core';
import { MeteoServiceService } from '../_services/meteo/meteo-service.service';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit {
  // Déclaration d'une variable pour stocker les données météo
  meteoData: any; // Vous pouvez remplacer any par le type de données approprié

  constructor(private meteoService: MeteoServiceService) { }

  ngOnInit(): void {
    // Appel à une méthode du service pour charger les données météo lors de l'initialisation du composant
    this.loadMeteoData();
  }

  // Méthode pour charger les données météo à partir du service
  loadMeteoData() {
    this.meteoService.getAllMeteos().subscribe(
      (data) => {
        this.meteoData = data; // Stocke les données récupérées dans la variable meteoData
      },
      (error) => {
        console.log('Une erreur s\'est produite lors du chargement des données météo : ', error);
      }
    );
  }
}