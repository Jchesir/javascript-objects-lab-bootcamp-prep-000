var recipes = { hamburger:"beef" } ;

function updateObjectWithKeyAndValue(recipes, ingredient, seasoning){
var meat = {[ingredient]: seasoning}
return Object.assign ({}, recipes, meat)

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, seasoning){
  recipes [ingredient] = seasoning
  return recipes
  
}

function deleteFromObjectByKey(recipes, ingredient){
return delete recipes.ingredient
}

function destructivelyDeleteFromObjectByKey (recipes, ingredient){
return 
}