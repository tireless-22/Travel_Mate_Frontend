
import * as React from "react";
import { useState } from "react";
import ReactMapGl from "react-map-gl";

function App() {

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });


  return (
    <div className="App">
     
        <ReactMapGl
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewPortChage={nextViewport => setViewport(nextViewport)}
      />
      
    </div>
  );
}

export default App;
