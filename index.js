// Write your solution here!
const cats=["Milo","Otis","Garfield"];


function destructivelyAppendCat(name)


{

cats.push(name)
return cats
}


console.log(cats)

function destructivelyPrependCat(name)

{


  cats.unshift(name)
  return cats
}



function destructivelyRemoveFirstCat(name)

{

cats.shift(name)
return cats

}



function destructivelyRemoveLastCat(name)

{

cats.pop(name)
return cats

}

function appendCat(name)
{

const copycats=[...cats,name]
return copycats
}


function prependCat(name)
{

const copycats=[name,...cats]
return copycats
}

function removeLastCat(name){
  let newCat = cats.slice(0, -1)
  return newCat
}


function removeFirstCat(name){
  let newCat = cats.slice(1)
  return newCat