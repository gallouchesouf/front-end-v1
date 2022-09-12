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
  selector: 'app-all-bricoleurs',
  templateUrl: './all-bricoleurs.component.html',
  styleUrls: ['./all-bricoleurs.component.css']
})
export class AllBricoleursComponent implements OnInit {

  villes: Adress[];
  category: SousService[];
  missions:Mission[];
  CLIENTS : Client[];
  bricoleurs : Client[];

  constructor(private _bricoservice: BricoleurService,
    private router: Router,
    private _missionService: MissionService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllBricoleurs();
    this.getAllMissions();
    this.getAllClients();
  }

 getAllBricoleurs(){
  this._bricoservice.getAll().subscribe((bricos:Bricoleur[]) =>{
      this.bricoleurs = bricos;
  } );
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
