/* eslint-disable @typescript-eslint/no-unused-vars */
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: 1, position: "relative" }}>
        <MapContainer
          center={[37.8283, -98.5795]}
          zoom={4.5}
          style={{ height: "100%", width: "100%", position: "absolute" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[40.6413, -73.7781]}>
            <Tooltip>
              <div>
                <h3>Plane X</h3>
                <p>Status: In flight</p>
              </div>
            </Tooltip>
          </Marker>
        </MapContainer>
      </div>
      <div style={{ padding: "1rem" }}>Additional content goes here</div>
    </div>
  );
};

export default Map;
