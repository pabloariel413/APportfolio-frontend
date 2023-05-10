import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const works= [
      {
       "id": 1,
       "title": "Movistarrrk",
       "urlImage": "https://cdn2.downdetector.com/static/uploads/logo/Movistar_2016_Vertical_Blue_3.png",
       "description": "Puesto enfocado en ofrecer el servicio de Fibra Óptica a potenciales clientes y acompañarlos hasta realizada la instalación",
       "periodo": "Mayo 2021 - Octubre 2021"
     }, 
      {
       "id": 2,
       "title": "Vendedor independiente", 
       "urlImage": "https://blog.bling.com.br/wp-content/uploads/2017/12/marketplace-reverso-o-que-e.jpg?x51969",
       "description": "Repositor, cajero y administrador de almacen familiar/ventas a traves de redes sociales de aparatos electrónicos",
       "periodo": "2015 - 2020"
     }
      ];
      return {works}
    }
  }
