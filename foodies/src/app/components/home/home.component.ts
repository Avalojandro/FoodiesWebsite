import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latitude = 13.693550056949325;
  longitude = -89.23397530278667;
// 13.693550056949325, -89.23397530278667

  // formularioCreado: FormGroup;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    // https://api.elaniin.dev/ + /api/locations redirects to https://api.elaniin.dev/ 
    // the response is not a JSON
        // this.dataService.getLocations().subscribe(resp =>{
        //   console.log("show locations");
        // })
      }

      // Params to use in the ngIf of the form
      param1: boolean = false;
      param2: boolean = true;

      enviar(){
        this.param1 = true;
        this.param2 = false;
      }

}
