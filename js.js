var searchButton = $("#searchButton");
var cityName = "";

searchButton.click(function () {
    var userInput = $("#userInput").val();

    if (userInput !== "") {
        console.log(userInput);

        requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=" + "e3743c74c20f8d9c13a77d0e00135d22";

        fetch(requestUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.main.humidity);
            console.log(data.wind.speed);
      


            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;
            var Url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + '&lon=' + cityLon + "&units=imperial&exclude=minutely&appid=" + "e3743c74c20f8d9c13a77d0e00135d22";
        
            fetch(Url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.current.uvi);

                
                console.log(data.daily[0].feels_like.day); //day 1 temp
                console.log(data.daily[0].humidity); //day 1 humidity
                console.log(data.daily[1].feels_like.day); //day 2 temp
                console.log(data.daily[1].humidity); //day 2 humidity
                console.log(data.daily[2].feels_like.day); //day 3 temp
                console.log(data.daily[2].humidity); //day 3 humidity
                console.log(data.daily[3].feels_like.day); //day 4 temp
                console.log(data.daily[3].humidity); //day 4 humidity
                console.log(data.daily[4].feels_like.day); //day 5 temp
                console.log(data.daily[4].humidity); //day 5 humidity
            });// end of second Fetch paratntisez



        }); // End of First Fetch  parantisez 



    }


})


