const fetchButton = document.getElementById("fetch-button");
const resultDiv = document.getElementById("result");
const loader = document.getElementById("loader");

fetchButton.addEventListener("click", () => {
  // Show the loader
  loader.style.display = "block";
  // Hide the result
  result.style.display = "none";
  fetch(
    "https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi"
  )
    .then((response) => response.json())
    .then((data) => {
      // Hide the loader
      loader.style.display = "none";
      // Show the result
      result.style.display = "block";
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomHadis = data[randomIndex].name;
      const randomAuthor = data[randomIndex].author;
      resultDiv.textContent = ` ${randomHadis} - Autor:   ${randomAuthor}`;
    })
    .catch((error) => {
      // Hide the loader
      loader.style.display = "none";
      // Show an error message
      result.style.display = "block";
      result.innerHTML = "Error fetching data.";
      console.error("Error fetching data:", error);
    });
});
