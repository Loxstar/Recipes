let section = document.querySelector("section");
let input = document.querySelector("#find");
input.addEventListener("click", function () {
let food = input.value;
// console.log(food);

function convertFromJson(response) {
    return response.json();
}

function displayRecipes(recipes) {
    for (let i = 0; i < recipes.results.length; i++) {


        let beef = `
<div>

<h3> ${recipes.results[i].title}</h3>
<a href = "${recipes.results[i].href}">
<img src= "${recipes.results[i].thumbnail}"></a>
</div>
`
        section.innerHTML += beef;
    };

};


fetch("http://recipepuppyproxy.herokuapp.com/api/?${food}")
    .then(convertFromJson)
    .then(displayRecipes)


