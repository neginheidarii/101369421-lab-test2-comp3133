import { Component, OnInit } from '@angular/core';
import { Missionservice } from '../network/missionservice.service';
import { Mission } from '../models/mission';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent  {
  missions?: Mission[];
  years?: string[];

  constructor(private route: ActivatedRoute, private missionService: Missionservice) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const year = params.get('year');
      if (year) {
        this.missionService.getMissionsByYear(year).subscribe(missions => {
          this.missions = missions;
        });
      } else {
        this.missionService.getMissions().subscribe(missions => {
          this.missions = missions;
        });
      }
    });

    this.missionService.getMissions().subscribe(missions => {
      this.years = Array.from(new Set(missions.map(m => m.launch_year)));
    });
  }
}