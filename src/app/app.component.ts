import { Component } from '@angular/core';
import { IPeople } from './people';
import { PeoplesService } from './peoples.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  totals : IPeople [] = [];

  constructor(service: PeoplesService){

    service.getPeople().subscribe(data => this.totals = data)

  }

}
