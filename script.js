import { data_function } from "./function.js";
let inp = document.querySelector("#city");
let btn = document.querySelector("#searchBtn");
let main = document.querySelector("#weather");

btn.addEventListener("click", ()=>{ data_function(inp,main)})

let searchBox = document.getElementById("city");

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        data_function(inp,main);
    }
});
