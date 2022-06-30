import { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import LongdoMapComponent from '../../longdo-map/LongdoMapComponent';

export default function Location(props) {
  const { location } = props;
  const [longdo, setLongdo] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && location) {
      map.location(JSON.parse(location), true);
      map.Overlays.clear();
      let marker = new longdo.Marker(JSON.parse(location));
      map.Overlays.add(marker);
    }
  }, [map, location]);

  const getLocation = () => {
    // console.log(JSON.parse(location));
    // console.log(JSON.parse(location));
    // const result = map.location(longdo.LocationMode.Pointer);
    // map.location({ lon: 100.46941682696342, lat: 13.727880393074473 }, true);
    // map.location(longdo.LocationMode.Geolocation);
    // let result = map.location();
    // map.Overlays.clear();
    // let marker = new longdo.Marker(result);
    // map.Overlays.add(marker);
  };

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Location</h1>
        <div className="flex gap-2">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
            onClick={getLocation}
          >
            <AiOutlineEdit className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="h-[500px]">
        <LongdoMapComponent
          map={map}
          setMap={setMap}
          setLongdo={setLongdo}
          location={location}
        />
      </div>
    </div>
  );
}
