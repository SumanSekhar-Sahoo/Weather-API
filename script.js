document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '377b55fdce5f43b593e135152252302'; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found!');
            } else {
                const location = data.location.name;
                const temperature = data.current.temp_c;
                const condition = data.current.condition.text;
                
                // Display weather info
                document.getElementById('location').innerText = `Location: ${location}`;
                document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
                document.getElementById('condition').innerText = `Condition: ${condition}`;
                
                // Show weather info section
                document.getElementById('weather-info').style.display = 'block';
            }
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error(error);
        });
}
