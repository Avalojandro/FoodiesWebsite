import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resp } from 'src/app/interfaces/interfaces';

  const apiUrl = 'https://api.elaniin.dev'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // Recycling the API Url 
  private ejecutarQuery<T>(query:string){
    query = apiUrl + query;
    return this.http.get<T>(query);
  }

        // getLocations(){
        //   return this.ejecutarQuery<Resp>(`/api/locations`)
        // }


  // Creating a function to inject in the Menu component 
  getCategory(category: string){
    return this.ejecutarQuery<Resp>(`/api/menu${category}`);}
            // return this.http.get<Resp>('https://api.elaniin.dev/api/menu?category=1');}
    
}
