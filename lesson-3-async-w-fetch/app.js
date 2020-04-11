(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        console.log('Hello');
        console.log(searchField.value);
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
//        debugger;

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
        headers: {
            Authorization: 'Client-ID S-phGJ7TVabUSlDM2-oBqiUi_1miQXt3CBhfXK9ayg8'
                }
            }).then(response => response.json())
            .then(addImage)
            .catch(e => requestError(e, 'image'));

         function addImage(data) {


            let htmlContent = '';
            const firstImage = data.results[0];
//            debugger;

            if (firstImage) {
               htmlContent = `<figure>
                    <img src="${firstImage.urls.full}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`;
            } else {
               htmlContent = 'Unfortunately, no image was returned for your search.'
           }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }

        function requestError(e, part) {
    console.log(e);
    responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        }



    });
})();

