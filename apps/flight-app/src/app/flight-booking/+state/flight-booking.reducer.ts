import { Flight } from '@flight-workspace/flight-lib';
import { createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[];
  flightsLoadingStatus: 'Loading' | 'Loaded' | 'Init' | 'Error'
}

export interface FlightBookingRootState {
  flightBooking: State;

}

export const initialState: State = {
  flights: [],
  flightsLoadingStatus: 'Init'
};


export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = action.flights;
    return { ...state, flights };
  }),
  on(FlightBookingActions.flightUpdate, (state, action) => {
    const flights = state.flights.map(
      f => f.id === action.flight.id ? action.flight : f
    );
    return { ...state, flights };
  })

);

