import React, { useEffect, useState } from 'react';

export default function LongdoMapComponent({ setMap, setLongdo }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api.longdo.com/map/?key=b97880b7038ad3359abb508c10e60801`;
    script.id = 'longdoMapScript';
    document.body.appendChild(script);

    script.onload = () => {
      const longdo = window.longdo;
      const map = new window.longdo.Map({
        placeholder: document.getElementById('map'),
        language: 'en',
      });
      setMap(map);
      setLongdo(longdo);
    };
  }, []);

  return <div id="map" className="w-full h-full"></div>;
}
