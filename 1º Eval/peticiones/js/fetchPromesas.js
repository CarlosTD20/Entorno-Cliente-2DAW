let url = 'http://localhost:3000/'

function get(entidad) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url+ entidad);
        req.responseType='json'
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response); // Resolve the promise with the response text
            }
            else {
                reject(Error(req.statusText)); // HTTP Error reject with statusText
            }
        };
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send(); // Make the request
    });
}

let entidad = prompt('Dime la entidad')
get(entidad)
    .then(respuesta => {
        respuesta.forEach(r=>console.log(r))
    })
    .catch(error => console.log(error))



// let entidad = prompt('Dime la entidad')
// get(entidad).then(respuesta => {
//
// })
//     .catch(error => console.log(error))