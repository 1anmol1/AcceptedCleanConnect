import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, PolylineF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
};

// Helper function to get color-coded marker icons
const getMarkerIcon = (status) => {
  let color;
  switch (status) {
    case 'Full':
    case 'Overflow':
      color = 'red';
      break;
    case 'Half-Full':
      color = 'orange';
      break;
    case 'Empty':
      color = 'green';
      break;
    default:
      color = 'grey';
  }
  return {
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: 1,
    strokeColor: 'white',
    strokeWeight: 2,
    scale: 10,
  };
};

const MapComponent = ({ center, markers = [], routeCoordinates = [] }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {/* Render a marker for each bin */}
      {markers.map((marker) => (
        <MarkerF
          key={marker.binId}
          position={{
            lat: marker.location.coordinates[1],
            lng: marker.location.coordinates[0],
          }}
          icon={getMarkerIcon(marker.status)}
          title={`Bin ID: ${marker.binId}\nStatus: ${marker.status}\nFill: ${marker.fillLevel}%`}
        />
      ))}

      {/* If route coordinates are provided, draw a line */}
      {routeCoordinates.length > 0 && (
        <PolylineF
          path={routeCoordinates}
          options={{
            strokeColor: '#007BFF',
            strokeOpacity: 0.8,
            strokeWeight: 4,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default React.memo(MapComponent);