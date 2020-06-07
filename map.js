const map = L.map("mapid").setView([48.59324745924871, 9.366315454244612], 12);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9lGDyW1A8L98aOcwGh0R",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

const marker = L.marker([48.59324745924871, 9.366315454244612]).addTo(map);
marker.bindPopup("Wir sind hier!").openPopup();
