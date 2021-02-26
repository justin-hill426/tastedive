document.getElementById("getCategory").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("input").value;

  //check if field is empty
  if (value === "") {
    return;
  }
  console.log(value);

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then(function(response) {
      //make sure request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Taste Dive API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json);
      // updateResult(json.text);
    });
});



document.getElementById("getRandom").addEventListener("click", function(event){
  event.preventDefault();
  const url2 = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url2)
    .then(function(response) {
      //make sure request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Taste Dive API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results;
      // updateResult(json.text);
    });
})
document.getElementById("getArea").addEventListener("click", function(event){
  event.preventDefault();
  const url3 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;
  fetch(url3)
    .then(function(response) {
      //make sure request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Taste Dive API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results;
      // updateResult(json.text);
    });
})

function updateResult(info) {
  document.getElementById('results').textContent = info;
}
