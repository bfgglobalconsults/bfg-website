// components/CountriesServedMap.jsx
"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default Leaflet icon issue with Webpack
// (Leaflet's default marker icon is not bundled correctly by some bundlers without this)
import L from 'leaflet';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'leaflet/dist/images/marker-icon.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});


const countryData = [
  { name: "India", geojsonPath: "/geojson/india.json", color: "#985EFF" }, // Purple
  { name: "United Kingdom", geojsonPath: "/geojson/united-kingdom.json", color: "#F7A800" }, // Orange
  { name: "Nigeria", geojsonPath: "/geojson/nigeria.json", color: "#29AB87" }, // Green
  { name: "Canada", geojsonPath: "/geojson/canada.json", color: "#F05454" }, // Red
  { name: "USA", geojsonPath: "/geojson/usa.json", color: "#6495ED" }, // Blue
  { name: "Australia", geojsonPath: "/geojson/australia.json", color: "#00BFFF" }, // Light Blue
];

const CountriesServedMap = () => {
  const mapCenter = [20, 0]; // Approximate center of the world
  const mapZoom = 2;

  // State to store loaded GeoJSON data
  const [loadedGeojson, setLoadedGeojson] = useState({});

  useEffect(() => {
    // Function to fetch GeoJSON data
    const fetchGeojsonData = async () => {
      const dataPromises = countryData.map(async (country) => {
        try {
          const response = await fetch(country.geojsonPath);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${country.geojsonPath}`);
          }
          const geojson = await response.json();
          return { name: country.name, data: geojson };
        } catch (error) {
          console.error(`Error loading GeoJSON for ${country.name}:`, error);
          return { name: country.name, data: null }; // Return null for failed fetches
        }
      });

      const results = await Promise.all(dataPromises);
      const newLoadedGeojson = results.reduce((acc, current) => {
        if (current.data) {
          acc[current.name] = current.data;
        }
        return acc;
      }, {});
      setLoadedGeojson(newLoadedGeojson);
    };

    fetchGeojsonData();
  }, []); // Run only once on component mount

  const countryStyle = (feature) => {
    // Ensure feature.properties exists and has a name
    const countryName = feature?.properties?.name;
    const countryInfo = countryData.find((c) => countryName && countryName.includes(c.name)); // Use .includes for more flexible matching

    return {
      fillColor: countryInfo ? countryInfo.color : "#cccccc", // Default gray if no match
      weight: 1,
      opacity: 1,
      color: "#d3d3d3",
      fillOpacity: 0.8,
    };
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xl  font-bold text-gray-900 mb-12">
          Countries Served
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Map */}
          <div className="w-full lg:w-2/3 h-[500px] rounded-lg shadow-md overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: "100%", width: "100%" }}
              whenCreated={(map) => {
                // Optional: Store map instance if you need to interact with it later
                // mapRef.current = map;
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Render GeoJSON layers once data is loaded */}
              {Object.keys(loadedGeojson).map((name) => (
                <GeoJSON
                  key={name}
                  data={loadedGeojson[name]}
                  style={countryStyle}
                />
              ))}
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="w-full lg:w-1/3">
            {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">Legend</h3> */}
            <ul className="space-y-3">
              {countryData.map((country) => (
                <li key={country.name} className="flex items-center">
                  <span
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: country.color }}
                  ></span>
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesServedMap;