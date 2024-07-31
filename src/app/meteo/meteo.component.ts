import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo/meteo-service.service';
import { Meteo } from '../_services/model/meteo';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  meteoData: Meteo[] = []; // Utilisez le type Meteo pour la variable meteoData

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.loadMeteoData();
  }

  loadMeteoData() {
    this.meteoService.getAllMeteos().subscribe(
      (data: Meteo[]) => {
        this.meteoData = data;
      }
    );
  }
}
