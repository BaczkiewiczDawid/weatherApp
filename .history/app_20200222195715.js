window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/203b6dde2966a44d96d2461987f0ec57/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                //set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                //formula for celsius
                let celsius = (temperature - 32) * (5/9);
                //set icon
                setIcons(icon, document.querySelector(".icon"));

                //change temperature to celscius/fahrenheit

                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = "C";
                    } else {
                        temperatureSpan.textContent = "F";
                    }
                }))
            })
        })
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});