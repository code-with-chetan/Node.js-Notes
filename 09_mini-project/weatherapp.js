import readline from 'readline/promises';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const BASE_URL=`https://api.openweathermap.org/data/2.5/weather`;
const APIKey=`9dd30291030063350573f7558e294b73`;

const getWeather=async(city)=>{

           const url=`${BASE_URL}?q=${city}&appid=${APIKey}&units=metric`;

           try{
            const response=await fetch(url);
            const weatherData=await response.json();
            // console.log(weatherData);
            console.log("\nWeather Information:");
            console.log(`City:${weatherData.name}`);
            console.log(`Temperature:${weatherData.main.temp}`);
            console.log(`Description:${weatherData.weather[0].description}`);
            console.log(`Humidity:${weatherData.main.humidity}`);
            console.log(`wind speed:${weatherData.wind.speed}`);

           }

           catch(error){
            console.log(error);
            
           }
}

const city=await rl.question("Enter the city Name:");
await getWeather(city);
rl.close();