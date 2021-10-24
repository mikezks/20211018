import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as FlightBookingActions from './flight-booking.actions';
import { FlightService } from '@flight-workspace/flight-lib';
import { of } from 'rxjs';



@Injectable()
export class FlightBookingEffects {

  loadFlights$ = createEffect(() =>
    // Trigger
    // Data Provider
    this.actions$.pipe(
      // Filter
      ofType(FlightBookingActions.flightsLoad),
      // Connect data loading stream
      switchMap(action => this.flightService.find(action.from, action.to, action.urgent).pipe(
        // Map result to new action
        map(flights => FlightBookingActions.flightsLoaded({ flights })),
        catchError(err => of(FlightBookingActions.flightsLoadedError({ error: err })))
      )
    )
  ));



  constructor(
    private actions$: Actions,
    private flightService: FlightService) {}

}
