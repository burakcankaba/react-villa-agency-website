import "./map.scss"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from "./marker.png"

const Map = () => {
    const position = [36.68169635500119, 29.09769630376116];
     const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor:  [-0, -0],
        iconSize: [32,45],     
     });
    return (
        <>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; TalaTourism'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                       Tala Villa 6
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map