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
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Orfanato exemplo <a href="./orphanage.html" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')
                                        //orphanage.html?id=10   
//markers daora    
L.marker([-23.643427788201457, -46.68510700351251],{icon:icon}).addTo(map)
    .bindPopup(popup)
    .openPopup();