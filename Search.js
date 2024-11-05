   // Get the elements
    const searchInput = document.getElementById('SearchInput');
    const searchInputnav = document.getElementById('searchInput');
    const productSuggestions = document.getElementById('productSuggestions');
    const SearchSection = document.getElementById('SearchSection');
    const Navbar = document.getElementById('Navbar')
    const searchfield = document.getElementById('searchfield')
    const container1 = document.getElementById('container1')
    console.log(Navbar);
    const SearchRow = document.getElementById("Row");
    
   function displaySearchSection(){
        SearchSection.style.display = 'block'
        SearchSection.style.position = 'absolute'
        SearchSection.style.width = " 100%"
        searchfield.style.display =' none'
        searchInput.focus()
    }
   

   // Show suggestions container when typing in search input
   searchInput.addEventListener('input', () => {
     // Show the suggestions container
     productSuggestions.style.display = 'block';
     SearchSection.style.display = 'block';
     
     
   });
   
   // Hide suggestions container when clicking outside

   document.addEventListener('click', (event) => {
      const isClickInsideInput = searchInput.contains(event.target); 
      const isClickInsideSuggestions = productSuggestions.contains(event.target);
      const isClickInsideinput = searchInputnav.contains(event.target);
      const isClickInsideContainer = SearchSection.contains(event.target)
   
      if (!isClickInsideInput && !isClickInsideinput && !isClickInsideSuggestions && !isClickInsideContainer) {
      //   productSuggestions.style.display = 'none'; // Hide the container
        SearchSection.style.display = 'none';
        searchfield.style.display ='block'
      }
    });

    searchInput.addEventListener('focus',(e)=>{
      if(SearchSection.contains(e.target)){
         container1.style.zIndex = '0.5'
      }
    })
    



const input = document.getElementsByClassName("InputBox")
const resultcontainer = document.getElementById("resultcontainer")


addEventListener('input', (e) => {
   const inputval = e.target.value;
   // console.log(inputval);
   let result = [];

   const Searchjson = async () => {
      const res = await fetch("./Search.json")
      const response = await res.json();

      if (inputval.length) {
         result = response.filter((element) => {
             const {id, image, name, price} =
      element;
            // localStorage.setItem("data", JSON.stringify({name, price, image}));       
            return name.toUpperCase().includes(inputval.toUpperCase())
         });    
      }
      // console.log(result);
      displayresult(result);

      const outercontainer =document.getElementById("productContainerouter") 
    console.log(outercontainer);
    

      response.map((element)=>{
         const {id, image, name, price} =
         element;
         outercontainer
      .querySelector(`#card${id}`)
      .addEventListener("click", (event) => {
         // console.log(`#card${id}`);
         // console.log(event.target);
          
        localStorage.setItem("data", JSON.stringify({ name, price, image }));
        window.location.href = "../PurchasePages/new.html";
      })
      })
      




console.log(outercontainer);


      // productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
      
       
   }

   Searchjson()
   

   //   resultcontainer.insertBefore(outercontainer,`<h2 id="searchfield"> Results for : ${e.target.value}</h2>`)



})
const displayresult = (result) => {
   const contents = result.map((res) => {

      return ` <div class="productContainer" id="card${res.id}" >       
              <div>
                    <img src=" ${res.image.main}" class="images"></img>
              </div>
              <div>
                   <p> ${res.name}   <p>
                   <p> Rs.${res.price} <p>
              </div>
            </div>`;
         
   }).join('')

   if (resultcontainer) {
      resultcontainer.innerHTML = `<div class="productContainerouter" id="productContainerouter">${contents}</div>`
   }else{
      resultcontainer.style.diplay = "none";
   }
}





