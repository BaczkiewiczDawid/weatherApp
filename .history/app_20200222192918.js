window.addEventListener("load", ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/203b6dde2966a44d96d2461987f0ec57/37.8267,-122.4233`;
        })
    }
});