import { Component, OnInit } from '@angular/core';
import { Client } from 'app/classes/client';
import { Mission } from 'app/classes/mission';
import { Service } from 'app/classes/service';
import { SousService } from 'app/classes/sous-service';
import { ClientService } from 'app/services/client.service';
import { MissionService } from 'app/services/mission.service';
import { ServiceService } from 'app/services/service.service';
import { SousServiceService } from 'app/services/sous-service.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  Mission: Mission = {
    id: null,
    titre: '',
    dateMission: '',
    descriptions: '',
    prixMission: '',
    clientId: 0,
    serviceId: 0,
  };
  Missions: Mission[];

  category: SousService[];
  clients: Client[];

  constructor(private MissionService: MissionService,
    private _SousService: SousServiceService,
    private _client: ClientService,
    private _ser:ServiceService) { }

  ngOnInit() {
    this.getAllMission();
    this.getSousServices();
    this.getClient();
  }


  showMission(miss: Mission) {
    this.Mission = miss;
  }

  deleteMission(id: any) {
    this.MissionService.delete(id)
      .subscribe(
        response => {
          this.Missions = [];
          this.getAllMission();
          //this.router.navigate(['/bricoleur']);
        },
        error => {
          console.log(error);
        });
  }

  getClient() {
    this._client.getAll().subscribe(res => {
      this.clients = res;
    }, err => {
      console.log("err");
      console.log(err);
    }
    );

  }

  getSousServices() {

    this._SousService.getAll().subscribe(sousService => {
      this.category = sousService;
    }, err => {
      console.log("err");
      console.log(err);
    }
    );

  }
  saveMission() {
    this.MissionService.create(this.Mission)
      .subscribe(
        response => {
          this.Missions = [];
          this.getAllMission();
          this.newMission();
        },
        error => {
          console.log(error);
        });
  }

  newMission() {
    this.Mission = {
      titre: '',
      dateMission: '',
      descriptions: '',
      prixMission: '',
      clientId: 0,
      serviceId: 0,
    };
  }


  getAllMission() {
    this.MissionService.getAll().subscribe(mess => {
      this.Missions = mess;
    }, err => {
      console.log(err);
    }
    );
  }

}
