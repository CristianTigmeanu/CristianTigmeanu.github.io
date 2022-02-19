let movieData =[]

fetch('https://imdb-api.com/en/API/Top250Movies/k_2llp45wr')

.then((res) => res.json() )
.then((data)=> {
  funcLocalData(data.items);
  funcCreateCards(movieData);
});

//==========================================
//Local copy of the data

funcLocalData = (movies) => {
movies.map((m)=>{
  movieData.push({
    id: m.id,
    image: m.image,
    title: m.title,
    year: m.year,
    rating: m.year,
    imDbRating: m.imDbRating,
    likes: 0,
    comments: "",
  });
});
console.log(movieData)
};



//==========================================


//Create cards
funcCreateCards = (newMovieData) =>{
  let tempCardData = '';
  newMovieData.map((nMD) => {
    tempCardData+=`<div class="movieCard">
 
    <img 
    src="${nMD.image}"
    alt="${nMD.title}"
    />
    <div class="movieCardDetails">
    <h2>${nMD.title}</h2>
    <p>${nMD.year}</p>
    <p>IMDB Rating: <span>${nMD.imDbRating}</span></p>
    <div class="movieCardSocial">
    <a href="#"><i class="fas fa-heart"></i></a>
    <a href="https://www.imdb.com/title/${nMD.id}/" target="_blank" ><i class="fas fa-share-alt"></i></a>
    <a href="#"><i class="fas fa-comment"></i></a>
    </div>
    </div>
    </div>`;
  });

  //console.log(tempCardData);
  document.querySelector('body').innerHTML = tempCardData;
};
//===============================================================