var searchButton = $("#searchButton");
var cityName = "";
var todayDate = new Date().toLocaleDateString() 






searchButton.click(function () {
    var userInput = $("#userInput").val();

    if (userInput !== "") {
        console.log(userInput);

        requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=" + "e3743c74c20f8d9c13a77d0e00135d22";

        fetch(requestUrl)

        .then(function (response) {
            return response.json();
        })

        // Data received from open weather API
        .then(function (data) {
            console.log(data);

            // City and Today's date will be displayed in right side of the page after user click.
            $("#current-city-name").text(userInput + " (" + todayDate + ")");    
            
            // Grabbing Temperature value and storing it in a variable. 
            console.log("Temp: " + data.main.temp);
            var currentTemp = data.main.temp;

            // Current Temprature will be displayed in page.
            $("#current-temp").text("Temperature: " + currentTemp + " F°");
            
            // Grabbing Humidity value and storing it in a variable. 
            console.log("Humidity: " + data.main.humidity);
            var currentHumidity = data.main.humidity;
            
            // Current Humidity will be displayed in page.
            $("#current-humidity").text("Humidity: " + currentHumidity + "%");
            
            // Grabbing Wind Speed value and storing it in a variable. 
            console.log("Wind Speed: " + data.wind.speed);
            var currentWindSpeed = data.wind.speed;

            // Current Wind Speed will be displayed in page.
            $("#current-wind").text("Wind Speed: " + currentWindSpeed + " MPH");


            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;
            var Url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + '&lon=' + cityLon + "&units=imperial&exclude=minutely&appid=" + "e3743c74c20f8d9c13a77d0e00135d22";
        
            fetch(Url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                // Grabbing UV Index value and storing it in a variable. 
                console.log("UV Index: " + data.current.uvi);
                var currentUv = data.current.uvi;

                // Current Wind Speed will be displayed in page.
                $("#current-uv").text("UV Index: " + currentUv)
                
                //Now it is time for 5day forcast
                $("#five-day-forcast").text("5-Day Forecast:")
                


                //Day 1

                // this method will add one to date.
                var nextDays = new Date();
                var datatodays = nextDays.setDate(new Date(nextDays).getDate() + 1);
                day1 = new Date(datatodays).toLocaleDateString();
                console.log(day1);

                $("#day1Date").text(day1)

                var Day1Temp = data.daily[0].feels_like.day;
                var Day1Humidity = data.daily[0].humidity;
                console.log("Day 1 Temp: " + Day1Temp); 
                console.log("Day 1 Humidity: " + Day1Humidity); 
                $("#day1Temp").text("Temp: " + Day1Temp + " F°");
                $("#day1Humid").text("Humidity: " + Day1Humidity + "%");


                //Day 2
                var nextDays = new Date();
                var datatodays = nextDays.setDate(new Date(nextDays).getDate() + 2);
                day2 = new Date(datatodays).toLocaleDateString();
                console.log(day2);

                $("#day2Date").text(day2)
                

                var Day2Temp = data.daily[1].feels_like.day;
                var Day2Humidity = data.daily[1].humidity;
                console.log("Day 2 Temp: " + Day2Temp); 
                console.log("Day 2 Humidity: " +  Day2Humidity);
                $("#day2Temp").text("Temp: " + Day2Temp + " F°");
                $("#day2Humid").text("Humidity: " + Day2Humidity + "%");
 

                //Day 3
                var nextDays = new Date();
                var datatodays = nextDays.setDate(new Date(nextDays).getDate() + 3);
                day3 = new Date(datatodays).toLocaleDateString();
                console.log(day3);

                $("#day3Date").text(day3)


                var Day3Temp = data.daily[2].feels_like.day;
                var Day3Humidity = data.daily[2].humidity;
                console.log("Day 3 Temp: " + Day3Temp); 
                console.log("Day 3 Humidity: " +  Day3Humidity); 
                $("#day3Temp").text("Temp: " + Day3Temp + " F°");
                $("#day3Humid").text("Humidity: " + Day3Humidity + "%");


                //Day 4
                var nextDays = new Date();
                var datatodays = nextDays.setDate(new Date(nextDays).getDate() + 4);
                day4 = new Date(datatodays).toLocaleDateString();
                console.log(day4);

                $("#day4Date").text(day4)


                var Day4Temp = data.daily[3].feels_like.day;
                var Day4Humidity = data.daily[3].humidity;
                console.log("Day 4 Temp: " + Day4Temp); 
                console.log("Day 4 Humidity: " +  Day4Humidity);
                $("#day4Temp").text("Temp: " + Day4Temp + " F°");
                $("#day4Humid").text("Humidity: " + Day4Humidity + "%");
 

                //Day 5
                var nextDays = new Date();
                var datatodays = nextDays.setDate(new Date(nextDays).getDate() + 5);
                day5 = new Date(datatodays).toLocaleDateString();
                console.log(day5);

                $("#day5Date").text(day5)



                var Day5Temp = data.daily[4].feels_like.day;
                var Day5Humidity = data.daily[4].humidity;
                console.log("Day 5 Temp: " + Day5Temp); 
                console.log("Day 5 Humidity: " +  Day5Humidity); 
                
                $("#day5Temp").text("Temp: " + Day5Temp + " F°");
                $("#day5Humid").text("Humidity: " + Day5Humidity + "%");


                
                // var forcast5dayDiv = $("#five-day-forcast");
                // var row = $("<div>").addClass("row");
                // forcast5dayDiv.append(row);


                // //NEED HELP
                // for (var i = 0; i < 5; i++){
                // console.log("Daily Temp: " + data.daily[i].feels_like.day); 
                // console.log("Daily Humidity: " + data.daily[i].humidity); 
                // var dailyTemp = data.daily[i].feels_like.day;
                // var dailyHumidity = data.daily[i].humidity;
                // }   


            });// End of second fetch



        }); // End of first fetch  



    }// End of if statement


})// End of on click


