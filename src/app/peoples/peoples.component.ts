import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from '../people';
import { PeoplesService } from '../peoples.service'

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  @Input("picture") _picture : string = "";
  @Input("name") _name : string = "";
  @Input("id") _id : number = 0;
  @Input("desc") _desc : string = "";
  @Input("link") _link : string = "";
  totals : IPeople [] = [];

  constructor(service: PeoplesService) { 

    service.getPeople().subscribe(data => this.totals = data)


  }

  ngOnInit(): void {
    

  }




}
