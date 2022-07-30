import { PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../model';

export const incrementBy1 = (state: CounterState) => {
  state.value += 1;
};

export const incrementByN = (state: CounterState, action: PayloadAction<number>) => {
  state.value += action.payload;
};

export const decrementBy1 = (state: CounterState) => {
  state.value -= 1;
};
