console.log('Boy we connecterd')
async function drawPoints(){
    const response = await fetch('/api')
    const data = await response.json()
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        let marker = new L.marker([data[i].X,data[i].Y])
            .bindPopup(`<b><img src='https://www.google.com/favicon.ico'></b><h7>${data[i].Name}</h7><ol><li>${data[i].services[0]}</li><li>${data[i].services[1]}</li><li>${data[i].services[2]}</li><li>${data[i].services[3]}</li></ol>`)
            .addTo(mymap);
    }
}

drawPoints()





//Med Icon
const hospital = {
    Central:[-1.285421, 36.811581],
    Kenyatta:[-1.296705, 36.804414],
    Coptic:[-1.298035, 36.797633],
    Nairobi_West:[-1.306573, 36.825871]
}
const Services = {
    Central:["short-term hospitalization","out-patient"],
    Kenyatta:["emergency room services","blood services"],
    Coptic:["x ray/radiology services","Radio Therapy"],
    Nairobi_West:["laboratory services","blood services"]
}
const mymap = L.map('mapid').setView([-1.2841, 36.9155], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaG9tZXIyNTQiLCJhIjoiY2s3cTkyczY5MDExeDNmbnZ2bjBxcHJxaCJ9.VlYz-NWHKnwW98GUMCSkzA'
}).addTo(mymap);

const x= L.marker(hospital.Kenyatta).addTo(mymap);
x.bindPopup("<b><img src='https://www.google.com/favicon.ico'></b><ul><li>Short-Term Hospital</li></ul><br>I am a popup.").openPopup();
const marker = L.marker(hospital.Central).addTo(mymap);
const hosi = L.marker([-1.2841, 36.9155]).addTo(mymap);
for (const key in hospital){
    let b = L.marker(hospital[key]).addTo(mymap)
    b.bindPopup(`<h2>${key}_Hospital</h2><ol><li>${Services[key][0]}</li><li>${Services[key][1]}</li></ol>`)
}

function getCords(){
    if('geolocation' in navigator){
        console.log('Geo lOcal available')
    navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude ,longitude} = pos.coords
        console.log(latitude)
        console.log(longitude)
    })
} else{
    console.log('HAki pole browser yako ina ringa')
  }
}
  function openSlideMenu(){
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  function closeSlideMenu(){
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }

