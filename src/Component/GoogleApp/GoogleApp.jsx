import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const GoogleApp = () => {
    const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '100vh',
  margin:'auto'
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: '',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
    return (
        <div >
            <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>

      <div className='h-20'></div>
        </div>
    );
};

export default GoogleApp;