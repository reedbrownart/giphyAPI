//Endpoints
const baseURL = 'https://';
const trendingGifURL = 'api.giphy.com/v1/gifs/trending';
const trendingStickerURL = 'api.giphy.com/v1/stickers/trending';
const searchGifURL = 'api.giphy.com/v1/gifs/search';
const searchStickerURL = 'api.giphy.com/v1/stickers/search';

//API Stuff
const myKey = '?api_key=Enmm3UZNiUyNOiajUcJ4QeIAtOhqIMWU';
const search = '&q=';
const limit = '&limit=';
const offset = '&offset=';
const rating = '&rating=';
const language = '&lang='

//For personal testing
const working = ' is working!!!!!111';

//TAG selectors
const submitForm = document.querySelector('form'); //the input form
const results = document.querySelector('#results'); //the div where all the results go
const searchTerms = document.querySelector('#searchTerms'); //this is what the user searched for

submitForm.addEventListener('submit', mainFunction);

function mainFunction(e) {
    e.preventDefault();
    console.log('the submit button' + working + ' and you just typed ' + searchTerms.value);

    fetch(baseURL + searchGifURL + myKey + search + searchTerms.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en')
        .then(function (response) {
            return response.json();
        })
        .then (function (json) {
            console.log(json);
            fillResults(json);
        })
}

function fillResults(json) {
    console.log('fillResults ' + working);
    //checks if results is occupied, if it is, it removes everything
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    let imageBoard = document.createElement('div');
    imageBoard.id = "imageBoard";

    for (let i = 0; i < json.data.length; i++) {
        let image1 = document.createElement('img');
        image1.src = 'https://media3.giphy.com/media/' + json.data[i].id + '/giphy.gif';
        imageBoard.appendChild(image1);
    }
    results.appendChild(imageBoard);
}