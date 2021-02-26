document.getElementById("artistSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("artistInput").value;

  //check if field is empty
  if (value === "") {
    return;
  }
  console.log(value);
  const url = "https://tastedive.com/api/similar?q=" + "&APPID=404021-CS260Pro-EAKEQK1Q";
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
      updateResult(json.text);
    });
}

function updateResult(info) {
  document.getElementById('results').textContent = info;
}
