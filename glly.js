let games = [document.querySelector(".guess"),document.querySelector(".game_1"),document.querySelector(".xyz")];
    const search = document.querySelector(".search");
    const searchBut = document.querySelector(".SEARCH.searchBut");
    const text = document.createElement("article");
    document.body.append(text);
    search.addEventListener("keyup",Query);


    function Query(){
      
      for(let i = 0; i < games.length; i++){
        const name = games[i].className;
        if(search.value.length > name.length){
          continue;
        }
        if(name === search.value){
          games[i].scrollIntoView();
          
        }
        
        }
      }
    