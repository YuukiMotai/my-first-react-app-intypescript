import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  //description: string;
}

const App: React.FC<AppProps> = ({ message }) => {

  return <>
          <div> React Starter Kit in TypeScript
            <CounterWithReducer />
          </div>
          <p>{message}</p>
        </>
};

App.defaultProps = {
  message: 'Please input message.',
  //description: 'This is App Component.'
}

export default App;
