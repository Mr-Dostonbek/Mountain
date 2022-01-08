import React from 'react';
import './style.scss';
import { MapMarkerIcon, PhoneIcon } from '@icons/material';
import { YMaps, Map, Placemark, Button, FullscreenControl, GeolocationControl, RouteButton, ZoomControl } from 'react-yandex-maps';

const YandexMap = () => {
    return (
        <YMaps className="w-100 position-relative" id="yanMap" >
            <div className='yanMap'>
            <div className='map-desc'>
                <h3>
                    <PhoneIcon /> 
                    <a href='tel:+998999943111'>+998 (99) 994-31-11</a>
                </h3>
                <h3>
                    <MapMarkerIcon /> Mirobod tumani, Said Baraka ko'chasi 18/1
                </h3>
            </div>
            <div className='yandex-page main-container w-100'>
                <Map
                    style={{ width: '100%', height: '400px' }}
                    defaultState={{
                        center: [40.495830, 71.219648],
                        zoom: 5,
                    }}
                >
                    <Placemark geometry={[40.495830, 71.219648]} />
                    <Button
                        options={{ maxWidth: 128 }}
                        data={{ content: 'Увеличить карту' }}
                        defaultState={{ selected: true }}
                    />
                    <FullscreenControl />
                    <GeolocationControl options={{ float: 'left' }} />
                    <RouteButton options={{ float: 'right' }} />
                    {/* <TypeSelector options={{ float: 'right' }} /> */}
                    <ZoomControl options={{ float: 'left' }} />
                </Map>
            </div>
            </div>
        </YMaps>
    );
}

export default YandexMap;
