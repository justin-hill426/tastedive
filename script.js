document.getElementById("getRandom").addEventListener("click", function(event){	
  event.preventDefault();	
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";	
  fetch(url)	
    .then(function(response) {	
      //make sure request was successful	
      if (response.status != 200) {	
        return {	
          text: "Error calling the MealDB API service: " + response.statusText	
        }	
      }	
      return response.json();	
    }).then(function(json) {		
      let randoms = "";	
      randoms +="<div class='random'>";	
      randoms += "<h2 class='enjoy'>" + "Enjoy Your Meal!" + "</h2>";	
      for (let i=0; i < json.meals.length; i++) {	
        randoms += "<h2 class='mealName'>" + json.meals[i].strMeal + "</h2>"	
        randoms += "<h3 class='area'>" + json.meals[i].strArea + "  |  " + json.meals[i].strCategory + "</h3>"	
        randoms += "<img class='image' src='" + json.meals[i].strMealThumb + "'>"	
        randoms += "<div class='instructions'>"	
        randoms += "<ol>" + "<li>"	
          for(let j = 0; j < json.meals[i].strInstructions.length-1; j++) {	
            if (json.meals[i].strInstructions.charAt(j) === ".") {	
              randoms += "</li>" + "<li>"	
            }	
            else {	
              randoms += json.meals[i].strInstructions[j]	
            }	
          }	
        randoms +="</ol>"	
        randoms += "</div>"	
      }	
      randoms += "</div>"	
      document.getElementById("results").innerHTML = "";
      document.getElementById("randomResults").innerHTML = randoms;		
    });	
})

document.getElementById("categorySubmit").addEventListener("click", function(event){
  event.preventDefault();
  const category = document.getElementById("categoryInput").value;
  const url2 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
  fetch(url2)
    .then(function(response) {
      //make sure request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the MealDB API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      let results = "<h1> " + category.charAt(0).toUpperCase() + category.slice(1,category.length) + " Meals </h1>";
      results += "<section class = 'meal-grid'>"
      for(let i = 0; i < json.meals.length; i++) {
        results += "<div class = 'mealResults'>";
        results += "<h4> <strong>" + json.meals[i].strMeal + "</strong> </h4>";
        results += "<img src=" + json.meals[i].strMealThumb + " width = 200px>";
        results += "</div>";
      }
      results += "</section>"
      updateResult(results);
    });
})

document.getElementById("mealLetterSubmit").addEventListener("click", function(event){
  event.preventDefault();
  const value = document.getElementById("mealLetterInput").value;
  if (value === "") {
    return;
  }
  const url3 = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + value.charAt(0);
  fetch(url3)
    .then(function(response) {
      //make sure request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the MealDB API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      let results = "<h1> Meals from letter " + value.charAt(0).toUpperCase() + " </h1>";
      results += "<section class = 'meal-grid'>"
      for(let i = 0; i < json.meals.length; i++) {
        results += "<div class = 'mealResults'>";
        results += "<h4> <strong>" + json.meals[i].strMeal + "</strong> </h4>";
        results += "<p> Area: <em>" + json.meals[i].strArea + "</em> </p>";
        results += "<p> Category: <em>" + json.meals[i].strCategory + "</em> </p>";
        results += "<img src=" + json.meals[i].strMealThumb + " width = 200px>";
        results += "</div>";
      }
      results += "</section>"
      updateResult(results);
    });
})

function updateResult(info) {
  document.getElementById('randomResults').innerHTML = "";
  document.getElementById('results').innerHTML = "";
  document.getElementById('results').innerHTML = info;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}