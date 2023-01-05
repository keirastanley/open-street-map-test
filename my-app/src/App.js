import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'

function App() {

  const coordinates = [{ location: [51.48550, -0.09633], description: "A random place in Elephant and Castle", link: "http://www.barchick.com" }, { location: [51.505, -0.09], description: "A cool bar in London", link: "http://www.random.com" }, { location: [51.6, -0.098], description: "Somewhere else in London", link: "http://www.random.com"}]

  return (
    <div className="App">
      <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map(element => <Marker position={element.location}>
          <Popup>
            <a href={element.link}>{element.description}</a>
          </Popup>
        </Marker>)}
      </MapContainer>
    </div>
  );
}

export default App;
