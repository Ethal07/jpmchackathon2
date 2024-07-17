function storeRecipe(recipeName) {
  listNames = localStorage.getItem("listNames");
  if (listNames) {
    listNames = JSON.parse(listNames);
    listNames.push(recipeName);
  } else {
    listNames = [recipeName];
  }
  localStorage.setItem("listNames", listNames);
  retrieveRecipes();
}

function retrieveRecipes() {
  listNames = localStorage.getItem("listNames");
  if (listNames) {
    document.getElementById("recipeNamesDisplay").value = listNames;
  } else {
    document.getElementById("recipeNamesDisplay").value = "No recipes found";
  }
}

function clearRecipes() {
  localStorage.clear();
}

window.onload = retrieveRecipes();
