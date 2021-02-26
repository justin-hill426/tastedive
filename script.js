//   const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
//   fetch(url)
//     .then(function(response) {
//       //make sure request was successful
//       if (response.status != 200) {
//         return {
//           text: "Error calling the Taste Dive API service: " + response.statusText
//         }
//       }
//       return response.json();
//     }).then(function(json) {
//       console.log(json);
//       // updateResult(json.text);
//     });



// document.getElementById("getRandom").addEventListener("click", function(event){
//   event.preventDefault();
//   const url2 = "https://www.themealdb.com/api/json/v1/1/random.php";
//   fetch(url2)
//     .then(function(response) {
//       //make sure request was successful
//       if (response.status != 200) {
//         return {
//           text: "Error calling the Taste Dive API service: " + response.statusText
//         }
//       }
//       return response.json();
//     }).then(function(json) {
//       console.log(json);
//       let results;
//       // updateResult(json.text);
//     });
// })
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
      results += "<h1> " + category + "Meals </h1>";
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
