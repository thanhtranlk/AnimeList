 const base_url = "https://api.jikan.moe/v3";


 function searchAnime(event) {

     event.preventDefault();

     const form = new FormData(this);
     const query = form.get("search");

     console.log(query);

     fetch("${base_url}/search/anime?q=${query}&page=1")
         .then(res => {
             res.json().then(
                 data => {
                     console.log(data);
                     if (data.length > 0) {
                         var temp = " ";

                         // start for loop
                         data.forEach((u) => {
                             temp += "<tr>";
                             temp += "<td>" + u.title + "</td>";
                             temp += "<td>" + u.rated + "</td>";
                             temp += "<td>" + u.score + "</td>";
                             temp += "<td>" + u.episodes + "</td></tr>";
                         })

                         // end for llop
                         document.getElementById("data").innerHTML = temp;
                     }
                 }
             )
         })
 }



 function updateDom(data) {

     const searchResults = document.getElementById('search-results');
     searchResults.innerHTML = Object.keys(animeByCategories).map(key => {

         const animesHTML = animeByCategories[key]
             .sort((a, b) => a.episodes - b.episodes)


     }).join("");
 }



 function pageLoaded() {
     const form = document.getElementById('search_form');
     form.addEventListener("submit", searchAnime);
     //const myTable = document.getElementById("table");
 }


 window.addEventListener("load", pageLoaded);