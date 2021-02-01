
requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e3743c74c20f8d9c13a77d0e00135d22';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });