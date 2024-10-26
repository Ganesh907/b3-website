import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { renderToString } from "react-dom/server";

const companyLocation = [19.112095862539928, 72.861061];

const muiMarkerIcon = L.divIcon({
    className: "",
    html: renderToString(<LocationOnIcon className="animate-bounce" style={{ color: "#f00", fontSize: "40px" }} />), // Render MUI icon as HTML
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

const ContactMap = () => {
    const markerRef = useRef();

    const handleMouseOver = () => {
        markerRef.current.openPopup();
    };

    const handleMouseOut = () => {
        // Don't close the popup on mouse out
        // The popup will only close when the close button is clicked
    };

    return (
        <MapContainer
            center={companyLocation}
            zoom={13}
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={companyLocation}
                icon={muiMarkerIcon}
                eventHandlers={{
                    mouseover: handleMouseOver,
                    mouseout: handleMouseOut,
                }}
                ref={markerRef}
            >
                <Popup
                    closeButton={true}
                    closeOnClick={false}
                    offset={[0, -30]}
                    style={{ marginBottom: "30px" }}

                >

                    <div className="flex">

                        <div className="flex flex-col justify-center items-center w-[100vw] lg:w-[140%] mr-2">
                            <div className="text-white p-2 mb-2 bg-[#0060b5] text-2xl font-semibold rounded-md">
                                B<sup>3</sup>
                            </div>
                            <h1 className="text-black font-semibold ">BitByBit Solutions</h1>
                            <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/atPs3Gv49QtvLVQN9" className="text-black underline" >
                                Visit Google Map
                            </a>
                        </div>

                        <p className="text-xs ms-10  w-auto">912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default ContactMap;
