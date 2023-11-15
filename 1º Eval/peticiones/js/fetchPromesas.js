let url = 'http://localhost:3000/'

function get(entidad) {
// Return a new promise.
    return new Promise(function(resolve, reject) {
// Do the usual XHR stuff
        var req = new XMLHttpRequest()
        req.open('GET', url+entidad)
        req.reponseType='json'
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response); // Resolve the promise with the response text
            }
            else {
                reject(Error(req.statusText)); // HTTP Error reject with statusText
            }
        }
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        }

        req.send();
    })
}

get("peliculas").then(peliculas => console.log(peliculas))
                        .catch(error => console.log(error))