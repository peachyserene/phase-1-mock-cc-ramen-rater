//lets the js run asynchronosly
document.addEventListener("DOMContentLoaded", () => {
  //pulls data from server, tanslates to json, runs it through a function
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => handleData(data));
  let menuDisplay = document.querySelector("div");
  //goes through each ramen dish and adds the image to a new img node
  function handleData(data) {
    data.forEach((dish) => {
      let newImage = document.createElement("img");
      newImage.src = dish.image;
      newImage.id = dish.id;
      menuDisplay.appendChild(newImage);
      newImage.addEventListener("click", (e) => {
        dishOnDisplay(dish);
      });
    });
  }
  displayImage = document.querySelector(".detail-image");
  displayRamenName = document.querySelector(".name");
  displayRestaurant = document.querySelector(".restaurant");
  displayRating = document.querySelector("#rating-display");
  displayComment = document.querySelector("#comment-display");

  //takes a dish and adds it to the center of the page
  function dishOnDisplay(dish) {
    displayImage.src = dish.image;
    displayRamenName.textContent = dish.name;
    displayRestaurant.textContent = dish.restaurant;
    displayRating.textContent = dish.rating;
    displayComment.textContent = dish.comment;
  }

  newName = document.getElementById("new-name");
  newRestaurant = document.getElementById("new-restaurant");
  newPhoto = document.getElementById("new-image");
  newRating = document.getElementById("new-rating");
  newComment = document.getElementById("new-comment");

  createBtn = document.querySelector("#new-ramen");
  createBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    addingNewRamen();
  });

  function addingNewRamen(e) {
    let newMenuImage = document.createElement("img");
    menuDisplay.appendChild(newMenuImage);
    newMenuImage.src = newPhoto.value;
    displayImage.src = newPhoto.value;
    // displayRamenName.textContent = newName.value;
    // displayRestaurant.textContent = newrestaurant.value;
    // displayRating.textContent = newRating.value;
    // displayComment.textContent = newComment.value;
  }
});

//https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg
//NOTES
// dont invoke function inside the event listener
// touble with selectors
