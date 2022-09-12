import { Component, OnInit } from '@angular/core';
import { Adress } from 'app/classes/adress';
import { Service } from 'app/classes/service';
import { SousService } from 'app/classes/sous-service';
import { AdressService } from 'app/services/adress.service';
import { ServiceService } from 'app/services/service.service';
import { SousServiceService } from 'app/services/sous-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


 
  Services: Service[];
  SousServices: SousService[];

  villes: Adress[];
  //sous -service
  SousService: SousService = {
    id: null,
    nom: '',
    adressId: 0,
    serviceId: 0
  };
  Service: Service = {
    id: null,
    nom: ''
  };
  constructor(private ServiceService: ServiceService,
    private SousServiceService: SousServiceService,
    private _adressService: AdressService) { }

  ngOnInit() {

    this.getAllService();
    this.getAllSousService();
    this.getAllAdress();
  }


  getAllAdress() {
    this._adressService.getAll().subscribe((adresses: any[]) => {
      this.villes = adresses;
    }, err => {
      console.log(err);
    }
    );
  }

  showService(serv: Service) {
    this.Service = serv;
  }

  deleteService(id: any) {
    this.ServiceService.delete(id)
      .subscribe(
        response => {
          this.Services = [];
          this.getAllService();
          //this.router.navigate(['/bricoleur']);
        },
        error => {
          console.log(error);
        });
  }
  // save SERVICE entity
  saveService() {

    this.ServiceService.create(this.Service)
      .subscribe(
        response => {
          
          this.Services = [];
          this.getAllService();
          this.newService();
        },
        error => {
          console.log(error);
        });
  }

  newService() {
    this.Service = {
      nom: ''
    };
  }


  async getAllService() {
    this.ServiceService.getAll().subscribe(Services => {
      this.Services = Services;
    }, err => {
      console.log("err");
      console.log(err);

    }
    );
  }

  //sous-service

  showSousServices(ssvc: SousService) {
    this.SousService = ssvc;
  }

  deleteSousServices(id: any) {
    console.log("id");
    console.log(id);

    this.SousServiceService.delete(id)
      .subscribe(
        response => {
          this.SousServices = [];
          this.getAllSousService();
          //this.router.navigate(['/bricoleur']);
        },
        error => {
          console.log(error);
        });
  }

  
  //SAVE SOUS SERVICE
  saveSousService() {

    this.SousServiceService.create(this.SousService)
      .subscribe(
        response => {
          console.log(response);
          this.newSousService();
          this.SousServices = [];
          this.getAllSousService();
        },
        error => {
          console.log(error);
        });
  }

  newSousService() {
    this.SousService = {
      nom: '',
      adressId: 0,

      serviceId: 0
    };
  }


  async getAllSousService() {
    this.SousServiceService.getAll().subscribe(SousService => {
      this.SousServices = SousService;

    }, err => {
      console.log("err");
      console.log(err);

    }
    );
  }

}
