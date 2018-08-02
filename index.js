var recipes = {
  cake: 'sugar, butter, eggs, vanilla extract, flour, baking powder, milk',
  smoothie: 'fruit, milk, ice'
} 
 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
} 
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
} 
 function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  newRecipe // { foo: 'bar' }
  delete newRecipe.key // true
  return newRecipe
} 
 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
} 