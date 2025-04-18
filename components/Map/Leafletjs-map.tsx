"use client"
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'




function LeafletjsMap() {

   const myIcon = divIcon({
      className: "my-custom-pin",
      iconAnchor: [14, 62],
      popupAnchor: [0, -62],
      html: `
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="20.000000pt" height="62.000000pt" viewBox="0 0 45.000000 62.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,62.000000) scale(0.100000,-0.100000)"
      fill="#ff352b" stroke="none">
      <path d="M178 610 c-20 -3 -55 -18 -76 -33 -112 -73 -125 -219 -35 -390 40
      -76 128 -177 155 -177 61 0 186 191 218 334 35 156 -104 297 -262 266z m86
      -134 c71 -29 67 -140 -5 -165 -24 -8 -42 -8 -67 0 -72 24 -78 134 -8 165 39
      17 40 17 80 0z"/></g></svg>`
   });




   return (

      <div className='h-full h-full w-full absolute top-0 left-0 z-0'>
         <MapContainer
            style={{ height: "100%", width: "100%", position: "relative" }}
            center={[51.505, 10]}
            zoom={4}
            scrollWheelZoom={true}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={[51.51, -0.09]} icon={myIcon}>
               <Tooltip>Tooltip for London</Tooltip>
            </Marker>
            <Marker position={[52.237049, 21.017532]} icon={myIcon}>
               <Tooltip>Tooltip for Warsaw</Tooltip>
            </Marker>
         </MapContainer>
      </div>
   )
}

export default LeafletjsMap