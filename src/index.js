//lets the js run asynchronosly
document.addEventListener("DOMContentLoaded", () => {
  //pulls data from server, tanslates to json, runs it through a function
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => handleData(data));

  // pulls the div to house ramen photos,
  function handleData(data) {
    let menuDisplay = document.querySelector("div");
    //goes through each ramen dish and adds the image to a new img node
    data.forEach((dish) => {
      let newImage = document.createElement("img");
      newImage.src = dish.image;
      newImage.id = dish.id;
      menuDisplay.appendChild(newImage);
      newImage.addEventListener("click", dishOnDisplay); //DEAR GOD DONT INVOKE IT HERE.
    });

    function dishOnDisplay(data) {
      displayImage = document.querySelector("img.detail-image");
      console.log(data.image); //displayImage.src = dish.image;
    }
  }
  //function to pull images

  //function to display dish info

  //function to add new dish
});

//NOTES
// dont invoke function inside the event listener
// touble with selectors
