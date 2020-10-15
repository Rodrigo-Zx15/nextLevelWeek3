//cria o mapa
const map = L.map('mapid').setView([-23.7108781,-46.7940031], 15);

//cria a camada 
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    // {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }
    ).addTo(map);

//icones map    
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})

function addMarker({id, name, lat, lng}){
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`)
                                      
    //markers daora    
    L
        .marker([lat, lng],{icon:icon})
        .addTo(map)
        .bindPopup(popup)
        
} 


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.longitude
    }
    addMarker(orphanage);
})



  