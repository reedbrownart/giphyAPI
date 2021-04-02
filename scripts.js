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
const language = '&lang=';

//For personal testing
const working = ' is working!!!!!111';

//TAG selectors
const submitForm = document.querySelector('#submitForm'); //the input form
const questions = document.querySelector('#questions'); //the div where the questions are
const results = document.querySelector('#results'); //the div where all the results go
const controls = document.querySelector('#controls'); // the div where the controls for the synth go
const button1 = document.querySelector('#button1'); //the first button
const button2 = document.querySelector('#button2'); //the second button
const button3 = document.querySelector('#button3'); //the third button
const button4 = document.querySelector('#button4'); //the fourth button
const button5 = document.querySelector('#button5'); //the fifth button

//answer inputs
const answer1 = document.querySelector('#question1'); //question 1 search terms
const answer2 = document.querySelector('#question2'); //question 2 search terms
const answer3 = document.querySelector('#question3'); //question 3 search terms
const answer4 = document.querySelector('#question4'); //question 4 search terms
const answer5 = document.querySelector('#question5'); //question 5 search terms

//event listeners for buttons
submitForm.addEventListener('submit', fetchData);
button1.addEventListener("click", buttonPress1);
button2.addEventListener("click", buttonPress2);
button3.addEventListener("click", buttonPress3);
button4.addEventListener("click", buttonPress4);
button5.addEventListener("click", buttonPress5);

//storage locations for images
let image1 = document.createElement('img');
image1.id = "image1";
let image2 = document.createElement('img');
image2.id = "image2";
let image3 = document.createElement('img');
image3.id = 'image3';
let image4 = document.createElement('img');
image4.id = 'image4';
let image5 = document.createElement('img');
image5.id = 'image5';

//storage location for arrays of images
let gifLibrary1;
let gifLibrary2;
let gifLibrary3;
let gifLibrary4;
let gifLibrary5;

function fetchData(e) {
    e.preventDefault();
    console.log('submit' + working);
    //creates a URL to fetch gifs based on the user inputs
    let firstAPICall = fetch(baseURL + searchGifURL + myKey + search + answer1.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en');
    let secondAPICall = fetch(baseURL + searchGifURL + myKey + search + answer2.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en');
    let thirdAPICall = fetch(baseURL + searchGifURL + myKey + search + answer3.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en');
    let fourthAPICall = fetch(baseURL + searchGifURL + myKey + search + answer4.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en');
    let fifthAPICall = fetch(baseURL + searchGifURL + myKey + search + answer5.value + limit + '25' + offset + '0' + rating + 'g' + language + 'en');


    //jsonifies all of the fetches into arrays and then runs create sampler with the newly created arrays
    Promise.all([firstAPICall, secondAPICall, thirdAPICall, fourthAPICall, fifthAPICall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
            gifLibrary1 = finalVals[0].data;
            gifLibrary2 = finalVals[1].data;
            gifLibrary3 = finalVals[2].data;
            gifLibrary4 = finalVals[3].data;
            gifLibrary5 = finalVals[4].data;
            createSampler(gifLibrary1, gifLibrary2, gifLibrary3, gifLibrary4, gifLibrary5);
        })
}

function createSampler(array1, array2, array3, array4, array5) {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    if (array1[0]) {
        console.log('image1' + working);
        image1.src = 'https://media3.giphy.com/media/' + array1[0].id + '/giphy.gif';
        results.appendChild(image1);
        button1.textContent = 'Change the meaning of life?';
        button1.style.backgroundColor = "white";
    } else {
        button1.textContent = 'sorry no results for this search';
        button1.style.backgroundColor = "red";
    }
    if(array2[0]) {
        console.log('image2' + working);
        image2.src = 'https://media3.giphy.com/media/' + array2[0].id + '/giphy.gif';
        results.appendChild(image2);
        button2.textContent = "Change your inspiration?";
        button2.style.backgroundColor = "white";
    } else {
        button2.textContent = 'sorry no results for this search';
        button2.style.backgroundColor = "red";
    }
    if(array3[0]) {
        console.log('image3' + working);
        image3.src = 'https://media3.giphy.com/media/' + array3[0].id + '/giphy.gif';
        results.appendChild(image3);
        button3.textContent = 'Change your lifesource?';
        button3.style.backgroundColor = "white";
    } else {
        button3.textContent = 'sorry no results for this search';
        button3.style.backgroundColor = "red";
    }
    if(array4[0]) {
        console.log('image4' + working);
        image4.src = 'https://media3.giphy.com/media/' + array4[0].id + '/giphy.gif';
        results.appendChild(image4);
        button4.textContent = 'Change your divine number?';
        button4.style.backgroundColor = "white";
    } else {
        button4.textContent = 'sorry no results for this search';
        button4.style.backgroundColor = "red";
    }
    if(array5[0]) {
        console.log('image5' + working);
        image5.src = 'https://media3.giphy.com/media/' + array5[0].id + '/giphy.gif';
        results.appendChild(image5);
        button5.textContent = 'Change your symbolic nature?';
        button5.style.backgroundColor = "white";
    } else {
        button5.textContent = 'sorry no results for this search';
        button5.style.backgroundColor = "red";
    }
    if (!array1[0] && !array2[0] && !array3[0] && !array4[0] && !array5[0]) {
        console.log('no results for search 1');
    } else {
        questions.style.display = 'none';
        results.style.display = 'flex';
        controls.style.display = 'flex';
    }
}
/*
function buttonPressFINAL() {
    let randomNum = Math.floor(Math.random() * 25);

    let libraryNum = 1;
    switch (libraryNum) {
        case 1:
            image1.src = 'https://media3.giphy.com/media/' + gifLibrary1[randomNum].id + '/giphy.gif';
            break;
        case 2:
            image1.src = 'https://media3.giphy.com/media/' + gifLibrary2[randomNum].id + '/giphy.gif';
            break;
        case 3:
            image1.src = 'https://media3.giphy.com/media/' + gifLibrary3[randomNum].id + '/giphy.gif';
            break;
        case 4:
            image1.src = 'https://media3.giphy.com/media/' + gifLibrary4[randomNum].id + '/giphy.gif';
            break;
        case 5:
            image1.src = 'https://media3.giphy.com/media/' + gifLibrary5[randomNum].id + '/giphy.gif';
            break;
    }
}
*/
function buttonPress1() {
    let randomNum = Math.floor(Math.random() * gifLibrary1.length);
    console.log(randomNum);
    image1.src = 'https://media3.giphy.com/media/' + gifLibrary1[randomNum].id + '/giphy.gif';
}

function buttonPress2() {
    let randomNum = Math.floor(Math.random() * gifLibrary2.length);
    console.log(randomNum);
    image2.src = 'https://media3.giphy.com/media/' + gifLibrary2[randomNum].id + '/giphy.gif';
}

function buttonPress3() {
    let randomNum = Math.floor(Math.random() * gifLibrary3.length);
    console.log(randomNum);
    image3.src = 'https://media3.giphy.com/media/' + gifLibrary3[randomNum].id + '/giphy.gif';
}

function buttonPress4() {
    let randomNum = Math.floor(Math.random() * gifLibrary4.length);
    console.log(randomNum);
    image4.src = 'https://media3.giphy.com/media/' + gifLibrary4[randomNum].id + '/giphy.gif';
}

function buttonPress5() {
    let randomNum = Math.floor(Math.random() * gifLibrary5.length);
    console.log(randomNum);
    image5.src = 'https://media3.giphy.com/media/' + gifLibrary5[randomNum].id + '/giphy.gif';
}