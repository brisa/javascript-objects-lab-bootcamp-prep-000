let recipes = new Object({keys: '0'})

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({},object,{[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  let newObj = object
   delete newObj[key]
   return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  
}