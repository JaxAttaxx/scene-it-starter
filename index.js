document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
    
    function renderMovies(movieArray) {
        const movieHtmlArray = movieArray.map((currentMovie) => {
            return `<div class="card movie col-12 col-sm-6 col-lg-4">
            <img src=${currentMovie.Poster} class="card-img-top" alt="">
            <h2>${currentMovie.Title}</h2>
            <p>${currentMovie.Year}</p>
            <a href="#" class="btn btn-primary">Add!</a>
            </div>`
        });
        
        return movieHtmlArray.join('');
    
    }
    // let movies = document.querySelector('.movies-container')
    // movies.innerHTML = renderMovies(movieData)
});

// const myForm = document.getElementById('search-form');
// myForm.addEventListener('submit', function(e){
//     // event listener code goes here
        
    
// })

// e.preventDefault();
