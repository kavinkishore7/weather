// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&appid={API key}&units=imperial



let API_KEY ="7d9da61df8b867d57834fe0daaa40ef3";

getweatherdata =() =>{

    const city =document.getElementById("city-input");
    const URL =' https://api.openweathermap.org/data/2.5/weather';
    
    const Full_url =`${URL}?q=${city.value}&appid=${API_KEY}&units=imperial` ;
    const weatherpromise = fetch(Full_url);

    return weatherpromise.then((response) => {
      return response.json()
     console.log(response)
    }).then(function (data){
      console.log(data)
      document.getElementById("temp").innerText=data.main.temp;
      document.getElementById("min-temp").innerText=data.main.temp_min;
      document.getElementById("max-temp").innerText=data.main.temp_max;

      
    }).catch(function(){
      alert("city not found")
    })

}
