document.getElementById("mealLetterSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("mealLetterInput").value;
  if (value === "") {
    return;
  }
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + value.charAt(0);
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
      let results;
      results += "<h1> Meals from letter " + value.charAt(0) + " </h1>";
      results += "<section class = 'meal-grid'>"
      for(let i = 0; i < json.meals.length; i++) {
        results += "<div class = 'mealResults'>";
        results += "<p> " + json.meals[i].strMeal + "</p>";
        results += "<p> " + json.meals[i].strArea + "</p>";
        results += "<img src=" + json.meals[i].strMealThumb + " width = 200px>";
        results += "</div>";
      }
      results += "</section>"
      updateResult(results);
    });
  })

	document.getElementById("getRandom").addEventListener("click", function(event){	
    event.preventDefault();	
    const url2 = "https://www.themealdb.com/api/json/v1/1/random.php";	
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
        console.log(json);	
        let randoms = "";	
        randoms +="<div class='random'>";	
        randoms += "<h2 class='enjoy'>" + "Enjoy Your Meal!" + "</h2>";	
        for (let i=0; i < json.meals.length; i++) {	
          randoms += "<h2 class='mealName'>" + json.meals[i].strMeal + "</h2>"	
          randoms += "<h3 class='area'>" + json.meals[i].strArea + "  |  " + json.meals[i].strCategory + "</h3>"	
          randoms += "<img class='image' src='" + json.meals[i].strMealThumb + "'>"	
          randoms += "<p>Instructions: " + json.meals[i].strInstructions + "</p>"	
        }	
        randoms += "</div>"	
        document.getElementById("randomResults").innerHTML = randoms;	
        updateResult(json.text);	
      });	
  })

document.getElementById("categorySubmit").addEventListener("click", function(event){
  event.preventDefault();
  const category = document.getElementById("categoryInput").value;
  const url3 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
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
      console.log(json);
      let results;
      results += "<h1> " + category + " Meals </h1>";
      results += "<section class = 'meal-grid'>"

      for(let i = 0; i < json.meals.length; i++) {
        results += "<div class = 'mealResults'>";
        results += "<p> " + json.meals[i].strMeal + "</p>";
        results += "<img src=" + json.meals[i].strMealThumb + " width = 200px>";
        results += "</div>";
      }
      results += "</section>"
      updateResult(results);
    });
})

function updateResult(info) {
  document.getElementById('results').innerHTML = info;
}