import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';


export const flightsLoaded = createAction(
  '[FlightBooking] Flights loaded',
  props<{ flights: Flight[] }>()
);

export const flightUpdate = createAction(
  '[FlightBooking] Flight update',
  props<{ flight: Flight }>()
);

class FlightManager {
  state: {
    flights: Flight[]
  } = {
    flights: []
  };

  addFlights(flights: Flight[]): void {
    console.log('[FlightBooking] Flights loaded');

    this.state = { ...this.state, flights };
  }
}

/* export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
); */
