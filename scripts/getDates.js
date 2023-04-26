document.getElementById("year").innerHTML = new Date().getFullYear();

let nLastModif = Date.parse(document.lastModified);

document.querySelector('.lastModified') = nLastModif;