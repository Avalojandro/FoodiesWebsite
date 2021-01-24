import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Datum, Resp } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Datum[] = [];

  category: Datum[] = [];

  // Categories of the endpoint API
  categories = [" ","?category=1","?category=2","?category=3"];

  // injecting the DataService
  constructor(private dataService: DataService) { }

  filterCards = '';

  ngOnInit() {

    // The images of api/menu have an error 404 

    this.dataService.getCategory(this.categories[0]).subscribe(resp =>{
      console.log(resp);
      this.category = resp.data;
      this.menu = resp.data
    });

  }

  // The arrays with the categories
  todas(){
    this.categories = [" ","?category=1","?category=2","?category=3"];
    this.dataService.getCategory(this.categories[0]).subscribe(resp =>{
      console.log(resp);
      this.category = resp.data;
      this.menu = resp.data
    });
  }

  tradicionales(){
    this.categories = ["?category=1"," ","?category=2","?category=3"];
    this.dataService.getCategory(this.categories[0]).subscribe(resp =>{
      console.log(resp);
      this.category = resp.data;
      this.menu = resp.data
    });
  }

  recomendaciones(){
    this.categories = ["?category=2","?category=1"," ","?category=3"];
    this.dataService.getCategory(this.categories[0]).subscribe(resp =>{
      console.log(resp);
      this.category = resp.data;
      this.menu = resp.data
    });
  }

  compartir(){
    this.categories = ["?category=3","?category=2","?category=1"," "];
    this.dataService.getCategory(this.categories[0]).subscribe(resp =>{
      console.log(resp);
      this.category = resp.data;
      this.menu = resp.data
    });
  }
}
