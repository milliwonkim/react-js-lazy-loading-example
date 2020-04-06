import React, { Suspense, lazy } from "react";
import "./index.css";
// import Artists from './Artists;

const Artists = lazy(() => import ('./Artists'));
const Performers = lazy(() => import('./Performers'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Still Loading....!!!!</h1>}>
        <Artists />
        <Performers />
      </Suspense>
    </div>
  );
}

export default App;