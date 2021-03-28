let map;

//função inicializadora do mapa com a api do google
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.57595, lng: -46.59106 },
    zoom: 10.5,
  });
  for (i = 0; i < nomeEstabelecimento.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(latEstabelecimento[i], lngEstabelecimento[i]),
        title: nomeEstabelecimento[i],
        map: map
    });
}
}

//link da api com as coordenadas desejadas
const url = "https://munddi.com/dev/pdvs?ne_lat=-23.27153&ne_lng=-45.91969&sw_lat=-24.06141&sw_lng=-47.22157";
// Eu escolhi pegar apenas na cidade de são paulo por conta da organização.
// ao visualizar o mapa de todo o Brasil, o zoom precisava ficar muito baixo
// o que causava problemas com a visualização. Com a visualização de apenas
// uma cidade a aplicação ficava mais bonita.

//função que retorna os dados recebidos da api
function Get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

//variável que vai armazenar os dados passados pela função acima
var json_obj = JSON.parse(Get(url));

//variáveis que armazenarão os dados dos campos json
var nomeEstabelecimento = []; //no fim nem foi necessário
var latEstabelecimento = [];
var lngEstabelecimento = [];


//função que grava cada campo do dado json em uma variável específica
function salvaEstabelecimento() {
    for (const nome in json_obj['data']) {
        nomeEstabelecimento.push(json_obj['data'][nome]['name']);
        latEstabelecimento.push(json_obj['data'][nome]['lat']);
        lngEstabelecimento.push(json_obj['data'][nome]['lng']);
    }
}

salvaEstabelecimento();

// console.log(nomeEstabelecimento[3]);
// console.log(latEstabelecimento[3]);
// console.log(lngEstabelecimento[3]);