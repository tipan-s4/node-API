function writeRecipe(name, desc, img){
    document.querySelector('#recipeName').textContent = name
    document.querySelector('#recipeImage').src = img
    document.querySelector('#recipeDescription').innerHTML = desc
}

function getRecipe(){
    fetch('/receta')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        recipeName = data.results[0].name;
        desc = data.results[0].description;
        img = data.results[0].thumbnail_url
        writeRecipe(recipeName, desc, img)
    })
}

window.addEventListener("load", ()=>{
    let btn = document.querySelector('#btn')
    btn.addEventListener("click", ()=>{
        getRecipe()
    })
})
