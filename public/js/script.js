const timedata = document.getElementById('time');
const msg = document.getElementById('msg');
const cityName = document.getElementById('city');
const search = document.getElementById('search');
const conditionimg = document.getElementById('conditionimg');
const temperature = document.getElementById('tempoutput');
const conditionType = document.getElementById('condition');
const windSpeeddata = document.getElementById('windspeed');
const preasuredata = document.getElementById('preasure');
const humiditydata = document.getElementById('humidity');
const visibilitydata = document.getElementById('visibility');


const getTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let time = '';

    if (hours > 12) {
        hours = hours - 12;
        if (minutes < 10) {
            time = `${hours}:0${minutes} PM`
        }
        else {
            time = `${hours}:${minutes} PM`
        }
    }
    else if (hours < 10) {
        if (minutes < 10) {
            time = `0${hours}:0${minutes} AM`;
        }
        else {
            time = `0${hours}:${minutes} AM`;
        }
    }
    else {
        if (minutes < 10) {
            time = `${hours}:0${minutes} AM`;
        }
        else {
            time = `${hours}:${minutes} AM`;
        }
    }
    const newTime = time;
    timedata.innerHTML = `${newTime}`;
}


const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;


    if (cityval === "") {
        alert('Please Enter City Name First');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=434859a191adb0fa2eb2db0d5503d1fe`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            const temp = arrdata[0].main.temp;
            const condition = arrdata[0].weather[0].main;
            const humidity = arrdata[0].main.humidity;
            const preasure = arrdata[0].main.pressure;
            const windspeed = arrdata[0].wind.speed;
            const visibility = arrdata[0].visibility;

            temperature.innerHTML = `${temp}°C`;
            conditionType.innerHTML = `${condition}`;

            if (condition == "Clouds") {
                conditionimg.innerHTML = "<i class='fa-solid fa-cloud' style='color: #e1e7e8; '></i>";
            }
            else if (condition == "Sunny") {
                conditionimg.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68; '></i>";
            }
            else if (condition == "Rainy") {
                conditionimg.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #15d3f5; '></i'";
            }
            else {
                conditionimg.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68; '></i>";
            }

            windSpeeddata.innerHTML = `${windspeed} km/h`;
            preasuredata.innerHTML = `${preasure} mb`;
            humiditydata.innerText = `${humidity}`;
            visibilitydata.innerHTML = `${visibility}`;
        } catch (err) {
            alert('Enter City Name Properly');
        }
    }


}

search.addEventListener('click', getinfo);
search.addEventListener('click', getTime);