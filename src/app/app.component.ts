import { Component } from '@angular/core';
import { Satellite } from './satellite';

// let sourceList: [string, string, string, string, boolean];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {

        let fetchedSatellites = data.satellites;
        // TODO: loop over satellites
        const div = document.getElementById("container");
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satelliteObj = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);

          this.sourceList.push(satelliteObj);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));



    // TODO: create a Satellite object using 
    // let satelliteObj 
    // TODO: add the new Satellite object to sourceList using: 

  }
  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }
}



