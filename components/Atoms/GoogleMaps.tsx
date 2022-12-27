import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

type Props = {
    city:any;
}

const GoogleMaps = ({ city }:Props) => {
  return (
    <LoadScript googleMapsApiKey={`${API_KEY}`}>
      <GoogleMap
        mapContainerClassName="w-full h-80 lg:h-[60vh] rounded-2xl"
        center={city}
        zoom={15}
      >
        <MarkerF position={city} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
