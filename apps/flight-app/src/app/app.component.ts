import { HttpClient, HttpParams } from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
   /*  this.http.post<any>(
      'http://www.angular.at/api/passenger',
      {
        id: 14,
        name: 'Anna',
        firstName: 'Johnson',
        bonusMiles: 3,
        passengerStatus: 'Q'
      }
    ).subscribe(console.log);

    this.http.get<any>(
      'http://www.angular.at/api/passenger', { params: new HttpParams().set('id', 14)}
    ).subscribe(console.log); */
  }
}
