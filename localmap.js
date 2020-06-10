const local_map = L.map("local-mapid").setView(
  [48.59324745924871, 9.366315454244612],
  11
);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9lGDyW1A8L98aOcwGh0R",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(local_map);

const homeMarker = L.marker([48.59324745924871, 9.366315454244612]).addTo(
  local_map
);
homeMarker
  .bindPopup("Ferienwohnung <br/> Burgblick <br/> im Neuffener Tal")
  .openPopup();

const castleMarker = L.marker([48.555556019068845, 9.392406977713108]).addTo(
  local_map
);
castleMarker.bindPopup("Burg Hohenneuffen");

const outletmarker = L.marker([48.53464000526675, 9.279249608516693]).addTo(
  local_map
);
outletmarker.bindPopup("Outletcity<br/>Metzingen");

const thermeMarker = L.marker([48.56576495063634, 9.39864546060562]).addTo(
  local_map
);
thermeMarker.bindPopup("Panoramatherme<br/>Beuren");
