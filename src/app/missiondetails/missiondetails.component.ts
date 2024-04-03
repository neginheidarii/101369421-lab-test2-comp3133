import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { Missionservice } from '../network/missionservice.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private missionService: Missionservice) { }

  @Input() selectedMission?: Mission;
  
  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));
    this.missionService.getMissionById(flightNumber).subscribe((data: Mission | undefined) => {
      this.selectedMission = data;
    });
    console.log(this.selectedMission?.flight_number);
  }
}

