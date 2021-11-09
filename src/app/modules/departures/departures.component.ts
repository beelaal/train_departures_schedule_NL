import { Component, OnInit } from '@angular/core';
import { DepartureService } from './services/departure.service';
import { Stations } from './models/stations';
   

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  departures:  Object[] = []
  stations: Object[]= [];
  loadingSpinner: boolean = false;
  error: any = undefined;
  tempData: Object[] = [];
  // filter options
  stationTypes: Object[]=[
    {
      staionType: 'IC',
      staionName: 'Inetrcity'
    },
    {
      staionType: 'SPR',
      staionName: 'Sprinter'
    },
    {
      staionType: 'All',
      staionName: 'All'
    }
  ]
  constructor(private departureService: DepartureService) { }

  ngOnInit(): void {
    this.getAllStations();
  }
  getAllStations(){
   // get all stations data
   this.loadingSpinner = true;
   this.departureService.getStations().subscribe(response=>{
     this.loadingSpinner = false;
     if(response){
         this.stations = response.payload;
     }
     else{
      this.stations = [];
     }
    },
    error => {
      this.error = error.error;
      this.loadingSpinner = false;
    })
  }
  onChangeStations(station: Stations){
    // on station change get the departure for that station
    this.departures= [];
    this.tempData = [];
    this.departureService.getDepartures(station.code).subscribe(response=>{
      if(response){
        this.error = undefined;
        this.departures = response.payload.departures;
        this.tempData = response.payload.departures;
      }
      else{
        this.departures= [];
        this.tempData = [];
      }
    },
    error => {
      this.error = error.error;
      this. loadingSpinner = false;
    })
  }
  filterTrainType(type: any){
    if(this.tempData.length > 0){
      this.departures = [];
      if(type.staionType == "All"){
        this.departures  = this.tempData
      }else{
        this.departures = this.tempData.filter((item: any)=>{
          if(item.trainCategory===type.staionType){
            return item
          }
         })
      }
     }

  }
}
