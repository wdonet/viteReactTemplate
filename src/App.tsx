import styled from 'styled-components';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import Counter from './common/counter';

const Button = styled.button`
  color: red;
  font-size: 20px;
`;

const App = () => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <>
        {process.env.REACT_APP_NAME} - {process.env.NODE_ENV}
      </>
      <br />
      <Button>Add Home here</MyButton>
      <br />
      <Counter />
    </div>
  );
};

export default App;
