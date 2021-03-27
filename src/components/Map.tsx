import React from 'react';
import 'leaflet/dist/leaflet.css';
import './../css/Map.css';
import { TileLayer, MapContainer, useMap } from 'react-leaflet';
import { CountryData, CaseTypes } from '../types';
import { showDataOnMap } from '../utils';

type MapProps = {
  zoom: number;
  center: any;
  countries: CountryData[] | undefined;
  type: CaseTypes;
};

export const Map = (props: MapProps) => {
  return (
    <div className='map'>
      <MapContainer center={props.center} zoom={props.zoom}>
        <ChangeView center={props.center} zoom={props.zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {props.countries ? (
          showDataOnMap(props.countries!, props.type)
        ) : (
          <div></div>
        )}
      </MapContainer>
    </div>
  );
};

type ChangeViewProps = {
  center: any;
  zoom: number;
};

const ChangeView = (props: ChangeViewProps) => {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return <div></div>;
};
