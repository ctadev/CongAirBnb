import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import s from "./maps.module.scss";

function Maps({ searchResult }) {
  const [viewState, setViewState] = useState({
    longitude: -0.0022275,
    latitude: 51.5421655,
    zoom: 11,
  });

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY3RhZGV2MjAyMiIsImEiOiJjbDF1OXIwZjAwc2U5M2JxY28xdGZoMmlkIn0.IwBn-1oXUIqM_xTlmKdggQ";

  return (
    <div className={s.mapContainer}>
      <Map
        {...viewState}
        style={{ height: "100%", width: "100%" }}
        mapStyle="mapbox://styles/ctadev2022/cl1u9x7do002f15s2fkqyowsv"
        mapboxAccessToken={MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {searchResult.map((result) => (
          <Marker
            key={result.long}
            longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
            color="red"
          />
        ))}
      </Map>
    </div>
  );
}

export default Maps;
