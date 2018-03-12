var recipes = { hamburger:"beef" } ;

function updateObjectWithKeyAndValue(recipes, ingredient, seasoning){
var meat = {[ingredient]: seasoning}
return Object.assign ({}, recipes, meat)

}

function destrubctivelyUpdateObjectWithKeyAndValue(recipes, ingredient, seasoning){
  recipes [ingredient] = seasoning
  return recipes
  
}