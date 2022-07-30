import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/reducers/counterSlice';
import styled from 'styled-components';
import { selectCount } from '../../store/selectors/counterSelectors';

const CounterRow = styled.div`
  display: flex;
`;

const Counter = () => {
  const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <CounterRow>
      {/* <button onClick={() => dispatch(increment(1))}>+</button> */}
      {/* <span>{count}</span> */}
      {/* <button onClick={() => dispatch(decrement(1))}>-</button> */}
    </CounterRow>
  );
};

export default Counter;
