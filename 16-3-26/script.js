// DATA
let recipes = JSON.parse(localStorage.getItem('recipes')) || []
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
let recent = JSON.parse(localStorage.getItem('recent')) || []


// DOM elements
const form = document.getElementById('recipeForm');
const recipesDiv = document.getElementById('recipes');
const favoritesDiv = document.getElementById('favorites');
const recentDiv = document.getElementById('recent');
const addBtn = document.getElementById('addBtn');
const spinBtn = document.getElementById('spinBtn');

// Validation

function validation(){
    const name = document.getElementById('name').value.length >= 3;
    const ingredients = document.getElementById('ingredients').value.trim();
    const time = parseInt(document.getElementById('time').value) >= 5;
    const diff =  document.querySelector('input[name="diff"]:checked');
    const cat = document.querySelectorAll('input[name="cat"]:checked').length > 0

    addBtn.disabled = !(name && ingredients && time && diff && cat);

    return name && ingredients && time && diff && cat;

}

// create recipe card

function createCard(recipe){
    const div = document.createElement('div');
    div.className = 'bg-gray-800 p-4 rounded-lg';
    div.dataset.id = recipe.id;

    div.innerHTML = `
    <div class = "flex justify-between items-start mb-2">
        <h3 class="font-semibold">${recipe.name}</h3>
        <span class="bg-gray-700 px-2 py-1 text-sm rounded">${recipe.time} min</span>
    </div>
    <p class="text-sm text-gray-400 mb-2">${recipe.ingredients}</p>
    <div class="flex gap-2">
        <button class="cook text-green-400 hover:text-green-300 text-sm">Cook!</button>
        <button class="fav text-yellow-400 hover:text-yellow-300 text-sm">${favorites.includes(recipe.id) ? '⭐' : "*"}</button>
        <button class = "del text-red-400 hover:text-red-300 text-sm">🗑️</button>
    </div>
    `;
    return div;
}   


function render(){
    recipesDiv.innerHTML = "";
    recipes.forEach(recipe=> recipesDiv.appendChild(createCard(recipe)));
    
    // count
    document.getElementById('count').textContent = recipes.length;
    spinBtn.disabled = recipes.length === 0;

    // favorites
    favoritesDiv.innerHTML = favorites.map( id =>{
        const r = recipes.find(r=> r.id === id);
        return r ? `<div class="text-sm">${r.name} ⭐</div>`: ''
    }).join('');

    // recent (last 5)
    recentDiv.innerHTML = recent.slice(0,5).map(id=>{
        const r = recipes.find(r=> r.id === id);
        return r ? `<div class="text-sm">${r.name}</div>`: ''
    }).join('');

    saveData();
}

function saveData(){
    localStorage.setItem('recipes', JSON.stringify(recipes))
    localStorage.setItem('favorites', JSON.stringify(favorites))
    localStorage.setItem('recent', JSON.stringify(recent)) 
}


/////////////// Actions

function addRecipe(){
    const recipe = {
        id: Date.now().toString(),
        name: document.getElementById('name').value,
        ingredients: document.getElementById('ingredients').value,
        time: document.getElementById('time').value,
        difficulty: document.querySelector('input[name="diff"]:checked').value,
        categories: Array.from(document.querySelectorAll('input[name="cat"]:checked')).map(cb => cb.value) 
    };

    recipes.push(recipe);
    form.reset();
    render();
} 

form.addEventListener('input', validation);
form.onsubmit = (e) => {
    e.preventDefault();
    if(validation()) addRecipe();
}
