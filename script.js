/*let city=document.querySelector("#city");
let cityname=document.querySelector("#cityname");
const getWeather= async(city)=>
{
    fetch('http://api.weatherapi.com/v1/current.json?key=44d6afb4d04e4741b3081020241707&q='+city)
    .then(response=>response.json())
    .then((response)=>{
        cityname.innerHTML=city;

        console.log(response)

        cloud_pct.innerHTML=response.current.cloud //cloud
        temp.innerHTML=response.current.temp_c //humidity
        temp2.innerHTML=response.current.temp_c
        feels_like.innerHTML=response.current.feelslike_c //humidity
        humidity.innerHTML=response.current.humidity //humidity
        heatindex.innerHTML=response.current.heatindex_c //heat
        uv.innerHTML=response.current.uv  //heat
        condition.innerHTML=response.current.condition.text  //heat
        condition2.innerHTML=response.current.condition.text
        wind_dir.innerHTML=response.current.wind_dir //wind
        wind_degrees.innerHTML=response.current.wind_degree  //wind
        wind_speed.innerHTML=response.current.wind_mph  //wind
        wind_speed2.innerHTML=response.current.wind_mph  
        windchill.innerHTML=response.current.windchill_c  //wind
        dew.innerHTML=response.current.dewpoint_c;
    })
    
}

let submit=document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
getWeather("Lucknow");*/
let city = document.querySelector("#city");
let cityname = document.querySelector("#cityname");
let cloud_pct = document.querySelector("#cloud_pct");
let temp = document.querySelector("#temp");
let temp2 = document.querySelector("#temp2");
let feels_like = document.querySelector("#feels_like");
let humidity = document.querySelector("#humidity");
let heatindex = document.querySelector("#heatindex");
let uv = document.querySelector("#uv");
let condition = document.querySelector("#condition");
let condition2 = document.querySelector("#condition2");
let wind_dir = document.querySelector("#wind_dir");
let wind_degrees = document.querySelector("#wind_degrees");
let wind_speed = document.querySelector("#wind_speed");
let wind_speed2 = document.querySelector("#wind_speed2");
let windchill = document.querySelector("#windchill");
let dew = document.querySelector("#dew");

const getWeather = async (city) => {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=44d6afb4d04e4741b3081020241707&q=' + city);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    cityname.innerHTML = city;
    cloud_pct.innerHTML = data.current.cloud;
    temp.innerHTML = data.current.temp_c;
    temp2.innerHTML = data.current.temp_c;
    feels_like.innerHTML = data.current.feelslike_c;
    humidity.innerHTML = data.current.humidity;
    heatindex.innerHTML = data.current.heatindex_c;
    uv.innerHTML = data.current.uv;
    condition.innerHTML = data.current.condition.text;
    condition2.innerHTML = data.current.condition.text;
    wind_dir.innerHTML = data.current.wind_dir;
    wind_degrees.innerHTML = data.current.wind_degree;
    wind_speed.innerHTML = data.current.wind_mph;
    wind_speed2.innerHTML = data.current.wind_mph;
    windchill.innerHTML = data.current.windchill_c;
    dew.innerHTML = data.current.dewpoint_c;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Handle error, e.g., display an error message to the user
  }
};

let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Lucknow");
