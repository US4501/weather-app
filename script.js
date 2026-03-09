async function getWeather() {

    let location = document.getElementById("locationInput").value;

    let apiKey = "4fd7d2565f364979a15154211260703";

    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("city").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerText =
            "Temperature: " + data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            "Condition: " + data.current.condition.text;

    }

    catch(error){
        alert("City not found");
    }

}