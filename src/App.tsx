import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
  //description: string;
}

const App: React.FC<AppProps> = ({ message }) => {

  return <>
          <div> React Starter Kit in TypeScript
            <Counter />
          </div>
          <p>{message}</p>
        </>
};

App.defaultProps = {
  message: 'Please input message.',
  //description: 'This is App Component.'
}

export default App;
