import { Component, OnInit } from '@angular/core';
import { Missionservice } from '../network/missionservice.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {
  missions?: Mission[];
  filteredMissions?: Mission[];
  selectedMission?: Mission;
  years?: string[];

  constructor(private missionService: Missionservice, private router: Router) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.missionService.getMissions().subscribe(missions => {
      this.missions = missions;
      this.filteredMissions = missions;
      this.years = [...new Set(missions.map(mission => mission.launch_year))];
    });
  }

  filterMissionsByYear(year: string): void {
    this.missionService.getMissionsByYear(year).subscribe(missions => {
      this.filteredMissions = missions;
    });
  }

  onSelect(mission: Mission): void {
    this.missionService.getMissionById(mission.flight_number).subscribe((data) => {
      this.selectedMission = data;
      this.router.navigate(['missiondetails', mission.flight_number]);
    }); 
  }
}

  

