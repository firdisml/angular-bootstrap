import { Component } from '@angular/core';
import { IPeople } from './people';
import { PeoplesService } from './peoples.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  constructor(service: PeoplesService){


  }

}
