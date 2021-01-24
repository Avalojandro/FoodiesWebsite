import { Component } from '@angular/core';
import { from } from 'rxjs';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodies';


  ngOnInit() {
  //Animations library
    AOS.init()
  }

}
