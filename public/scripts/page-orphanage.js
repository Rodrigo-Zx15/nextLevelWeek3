//cria o mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('#mapid span');
const lat = spanLat.dataset.lat;
const spanLng = document.querySelector('#mapid span');
const lng = spanLat.dataset.longitude;

const map = L.map('mapid', options).setView([lat,lng], 15);

//cria a camada 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//icones map    
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})




//markers daora 




L.marker([lat,lng],{icon:icon}).addTo(map)
    
function selectImage(event){
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removerActiveClass);

    function removerActiveClass(button){
        button.classList.remove("active");
    }
    button.classList.add('active')
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    imageContainer.src = image.src;
}
