const res=document.getElementById("Mybutton");

async function getData(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=74de48abbbc04288a0595056251205&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}
async function success(position){
    const res=await getData(position.coords.latitude,position.coords.longitude);
    const disp=document.getElementById('weatherResult');
    disp.innerHTML=`${res.current.temp_c}`;
}
function failure(){
    console.log("Something went wrong!")
}
res.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(success,failure);
});