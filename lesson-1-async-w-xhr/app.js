//(function () {
//    const form = document.querySelector('#search-form');
//    const searchField = document.querySelector('#search-keyword');
//    let searchedForText;
//    const responseContainer = document.querySelector('#response-container');
//
//    form.addEventListener('submit', function (e) {
//        e.preventDefault();
//        responseContainer.innerHTML = '';
//        searchedForText = searchField.value;
//    });
//})();

const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID S-phGJ7TVabUSlDM2-oBqiUi_1miQXt3CBhfXK9ayg8');
unsplashRequest.send();

        function addImage(){
        let htmlContent = '';
        const data = JSON.parse(this.responseText);
        const firstImage = data.results[0];

        debugger;
        }
