import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Flight } from '@flight-workspace/flight-lib';
import { debounceTime, distinctUntilChanged, filter, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'flight-workspace-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit {
  control = new FormControl();
  flights$: Observable<Flight[]> = of([]);
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Result-Stream: Flight result that shall be rendered
    this.flights$ =
      // Stream 1: Input value change
      // Trigger
      // Data Provider
      this.control.valueChanges.pipe(
        // Filter starts
        filter(city => city.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        // Filter ends
        // Side-effect: Assign loading state
        tap(() => this.loading = true),
        // Connect to Stream 2: Http call
        switchMap(city => this.load(city)),
        // Side-effect: Assign loading state
        tap(() => this.loading = false)
      );
  }

  // Stream 2: Backend API request
  // Data Provider
  load(from: string): Observable<Flight[]>  {
    const url = "http://www.angular.at/api/flight";

    const params = new HttpParams()
                        .set('from', from);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }
}
