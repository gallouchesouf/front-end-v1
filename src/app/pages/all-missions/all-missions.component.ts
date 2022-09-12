import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adress } from 'app/classes/adress';
import { Bricoleur } from 'app/classes/bricoleur';
import { Client } from 'app/classes/client';
import { Mission } from 'app/classes/mission';
import { SousService } from 'app/classes/sous-service';
import { BricoleurService } from 'app/services/bricoleur.service';
import { ClientService } from 'app/services/client.service';
import { MissionService } from 'app/services/mission.service';


@Component({
  selector: 'app-all-missions',
  templateUrl: './all-missions.component.html',
  styleUrls: ['./all-missions.component.css']
})
export class AllMissionsComponent implements OnInit {

  villes: Adress[];
  category: SousService[];
  missions:Mission[];
  CLIENTS : Client[];

  constructor(private _bricoservice: BricoleurService,
    private router: Router,
    private _missionService: MissionService,
    private clientService: ClientService) { }

  ngOnInit(): void {

    this.getAllMissions();
    this.getAllClients();
  }

 
  getAllClients(){
    this.clientService.getAll().subscribe(res=>{
      this.CLIENTS = res;
    });
  }

  getAllMissions(){
    this._missionService.getAll().subscribe(mess =>{
      this.missions = mess;
    })
  }


}
