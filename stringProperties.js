function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "String") console.log(key, obj[key]);
}

const movie = {
    title= 'A',
    movie = 'B',
    Actor = 'C'
};

showProperties (movie);