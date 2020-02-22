window.addEventListener("load", ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/203b6dde2966a44d96d2461987f0ec57/${lat},${long}`;
        })
        fetch()
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
            })
    }
});