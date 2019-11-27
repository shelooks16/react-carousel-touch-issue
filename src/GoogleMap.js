import React, { useEffect, useState } from "react";

function useScript(src) {
  const [state, setState] = useState({
    loaded: false
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    const onScriptLoad = () => {
      setState({
        loaded: true
      });
    };
    script.addEventListener("load", onScriptLoad);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", onScriptLoad);
    };
  }, [src]);

  return state.loaded;
}
export default function GoogleMap() {
  const api = "API-KEY";
  const isLoaded = useScript(
    `https://maps.googleapis.com/maps/api/js?v=3.38&key=${api}`
  );

  useEffect(() => {
    if (isLoaded) {
      const locationRio = { lat: -22.915, lng: -43.197 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: locationRio,
        gestureHandling: "cooperative"
      });
      const marker = new window.google.maps.Marker({
        position: locationRio,
        map: map,
        title: "Hello World!"
      });
    }
  }, [isLoaded]);

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <div id="map" style={{ height: "100%" }} />
    </div>
  );
}
