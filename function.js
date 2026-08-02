export function  data_function(inp , main){
    let city = inp.value.trim();
    if(city === "") return;
    main.innerHTML = "";

    let p = document.createElement("p");
    p.textContent = "⏳ Fetching weather data...";
    main.appendChild(p);
    fetch(`https://wttr.in/${city}?format=j1`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then(data => {
    
    if (!data.current_condition || !data.nearest_area) {
        throw new Error("City not found");
    }
    let div = document.createElement("div");
    let loc = document.createElement("p")
    let temp = document.createElement("p")
    let hum = document.createElement("p");
    let desc = document.createElement("p");

    loc.textContent =`📍 Location : ${data.nearest_area[0].areaName[0].value}`;
    temp.textContent = `🌡️ Temperature : ${data.current_condition[0].temp_C}°C`;
    hum.textContent = `💧 Humidity : ${data.current_condition[0].humidity}%`;
    desc.textContent =`☁️ Weather Description : ${data.current_condition[0].weatherDesc[0].value}` ;
    
    p.remove();
    div.appendChild(loc);
    div.appendChild(temp);
    div.appendChild(hum);
    div.appendChild(desc);
    main.appendChild(div);
})
.catch((err)=>{
    main.removeChild(p);    
    let error = document.createElement("h2");
    error.textContent = "❌ Unable to fetch weather data. Please check the city name or your internet connection.";
    main.appendChild(error);
    console.error(err);
    })
    .finally(()=>{
      inp.value=""
    })
}

