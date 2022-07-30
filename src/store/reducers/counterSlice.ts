import { createSlice, Slice } from '@reduxjs/toolkit';
import { CounterState } from '../model';
import { decrementBy1, incrementBy1, incrementByN } from '../actions/counterActions';

const initialState: CounterState = {
  value: 0,
};

export const counterSlice: Slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: decrementBy1,
    increment: incrementBy1,
    incrementByAmount: incrementByN,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
