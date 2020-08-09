import React from 'react';
import Title from './section/Title';
import Area from './section/Area';
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => {
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={process.env.REACT_APP_FULLPAGEKEY}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Title />
              </div>
              <div className="section">
                <Area />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
