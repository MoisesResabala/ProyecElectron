const fs = require('fs')
const path = require('path')
btnNuevo = document.getElementById('btnNuevo')
btnLeer = document.getElementById('btnLeer')
btnBorrar = document.getElementById('btnBorrar')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')


let pathName = path.join(__dirname, 'Files')
btnNuevo.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Fue guardado!");
    });
})

btnLeer.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err, data) {
        if (err) {
            return console.log(err);
        }
        fileContents.value = data
        console.log("Fue leido");
    })
})

btnBorrar.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    fs.unlink(file, function(err) {
        if (err) {
            return console.log(err);
        }
        fileName.value = ''
        fileContents.value = ''
        console.log("Fue eliminado");
    })
})
