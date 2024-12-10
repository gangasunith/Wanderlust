

  mapboxgl.accessToken = mapToken;

  // Initialize the map
  const map = new mapboxgl.Map({
      container: 'map', // The ID of the container element
      style: 'mapbox://styles/mapbox/streets-v12', // Map style (you can change this)
      center: listing.geometry.coordinates, // Initial map center [longitude, latitude]
      zoom: 9 // Initial zoom level
  });


const marker=new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`))
.addTo(map);