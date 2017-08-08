let section = document.querySelector("section");

function convertFromJson(response){
    return response.json();
}

function displayRecipes(recipes){
    //let something = '';
for (let i=0; i < recipes.results.length; i++){
    console.log(recipes);

let beef = `
<div>
<h3> ${recipes.results[i].title}</h3>
<a href = "${recipes.results[i].href}"><img src= "${recipes.results[i].thumbnail}"></a>
</div>
`
// something += beef;
section.innerHTML += beef;
}
// section.innerHTML = something;
}








fetch ("http://recipepuppyproxy.herokuapp.com/api/?i=beef")
    .then(convertFromJson)
    .then(displayRecipes)
    
    