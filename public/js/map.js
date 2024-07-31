// const mapContainer = document.querySelector("#map");

// document.addEventListener("DOMContentLoaded", initializeMap);

// function initializeMap() {
//   var mapOptions = {
//     center: { lat: 37.7749, lng: -122.4194 },
//     zoom: 8,
//   };
//   var map = new google.maps.Map(mapContainer, mapOptions);
// }
// import "./style.css";
import Map from "../../node_modules/ol/Map";
import OSM from "../../node_modules/ol/source/OSM.js";
import TileLayer from "../../node_modules/ol/layer/Tile.js";
import View from "../../node_modules/ol/View.js";
// const Map = require("ol/Map");
// const OSM = require("ol/source/OSM.js");
// const TileLayer = require("ol/layer/Tile.js");
// const View = require("ol/View.js");

const mapDiv = document.querySelector("#map");
console.log(mapDiv);

document.addEventListener("DOMContentLoaded", initializeMap);

function initializeMap() {
  const map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  map();
}
