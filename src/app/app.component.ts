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

  constructor() {
    this.sourceList = [];
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

      }.bind(this));
    }.bind(this));

    // TODO: create a Satellite object using 
    // let satelliteObj 
    // TODO: add the new Satellite object to sourceList using: 

  }
}




