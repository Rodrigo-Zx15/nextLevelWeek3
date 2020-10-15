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
})

let marker;
 
//markers daora    
map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    //insere os valores no input
    document.querySelector("[name=latitude]").value = lat;
    document.querySelector("[name=longitude]").value = lng;

    //tira os markers anteriores
    marker && map.removeLayer(marker);

    //colocar icons daora
    marker = L.marker([lat,lng], {icon}).addTo(map);
});

//upar fotos 
function addFoto(){
    //puxar o container de fotos #imgs
    const container = document.querySelector("#imgs");
    //pegar o container a se duplicar .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload");
    //clonar a img upada
    const novoContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);
    //verifica se ta vazio
    const input = novoContainer.children[0];
    if(input.value == ""){
       return;
    }
    //limpa o campo de texto
    novoContainer.children[0].value = "";

    //botar o clone no container #imgs
    container.appendChild(novoContainer);
}

function deletarFoto(event){
    console.log(event.currentTarget);
    const span = event.currentTarget
    //verifica se tem fotos upadas
    const fieldsContainer = document.querySelectorAll(".new-upload");
    if(fieldsContainer.length < 2){
        //limpa o valor
        span.parentNode.children[0].value = "";
        return
    };
    //remove o campo
    span.parentNode.remove();
}

//alternar sim e não
function alternarAtivo(event){
    //pegar o botão clicado
    const button = event.currentTarget
    
    
    //trocar o hidden
    const input = document.querySelector('[name="abre-fds"]');
    //verificar o botão que foi clicado
    input.value = button.dataset.value;
    //console.log(input.value)
    //tirar a .active
    document.querySelectorAll(".button-select button")
    .forEach((button) => {
        button.classList.remove('active');
    })
    //colocar a .active 
    button.classList.add('active');
    
}