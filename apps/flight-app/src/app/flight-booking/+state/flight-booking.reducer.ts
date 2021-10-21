import { Flight } from '@flight-workspace/flight-lib';
import { Action, createReducer, on } from '@ngrx/store';
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

);

