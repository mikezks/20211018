import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';


export const flightsLoad = createAction(
  '[FlightBooking] Flights load',
  props<{ from: string, to: string, urgent: boolean }>()
);

export const flightsLoaded = createAction(
  '[FlightBooking] Flights loaded',
  props<{ flights: Flight[] }>()
);

export const flightsLoadedError = createAction(
  '[FlightBooking] Flights loaded Error',
  props<{ error: any }>()
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


