
  const selectBox = document.querySelector(".select-box"),
  selectBtnX = selectBox.querySelector(".options .playerX"),
  selectBtnO = selectBox.querySelector(".options .playerO"),                      //select the id of every html element
  playBoard = document.querySelector(".play-board"),
  players = document.querySelector(".players"),
  allBox = document.querySelectorAll("section span"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replayBtn = resultBox.querySelector("button");
  
  
  window.onload = ()=>{
      for (let i = 0; i < allBox.length; i++) {
         allBox[i].setAttribute("onclick", "clickedBox(this)");                   //show the box (when you have to selec what you are x or o)
      }
  }
  
  
  selectBtnX.onclick = ()=>{
      selectBox.classList.add("hide");
      playBoard.classList.add("show");
  }                                                                
  selectBtnO.onclick = ()=>{ 
      selectBox.classList.add("hide");
      playBoard.classList.add("show");
      players.setAttribute("class", "players active player");
  }
  let playerXIcon = "fas fa-times",                                                //create x and 0 icons
  playerOIcon = "far fa-circle",
  playerSign = "Bot",
  runBot = true;
  
  
  function clickedBox(element){                                          //create the symbol that you choosed (x or o) on the box that you clicked
      if(players.classList.contains("player")){
          playerSign = "You";
          element.innerHTML = `<i class="${playerOIcon}"></i>`;
          players.classList.remove("active");
          element.setAttribute("id", playerSign);
      }else{
          element.innerHTML = `<i class="${playerXIcon}"></i>`;
          element.setAttribute("id", playerSign);
          players.classList.add("active");
      }
      selectWinner();                                                    //select the winner
      element.style.pointerEvents = "none";
      playBoard.style.pointerEvents = "none";
      let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
      setTimeout(()=>{
          bot(runBot);
      }, randomTimeDelay);
  }
  function bot(){
      let array = [];
      if(runBot){                                          
          playerSign = "You";                                                           //all function bot is to create the bot that you play vs him and the random picks that he made
          for (let i = 0; i < allBox.length; i++) {
              if(allBox[i].childElementCount == 0){
                  array.push(i);
              }
          }
          let randomBox = array[Math.floor(Math.random() * array.length)];             
          if(array.length > 0){
              if(players.classList.contains("player")){ 
                  playerSign = "Bot";
                  allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                  allBox[randomBox].setAttribute("id", playerSign);
                  players.classList.add("active");
              }else{
                  allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                  players.classList.remove("active");
                  allBox[randomBox].setAttribute("id", playerSign);
              }
              selectWinner();
          }
          allBox[randomBox].style.pointerEvents = "none";
          playBoard.style.pointerEvents = "auto";
          playerSign = "Bot";
      }
  }
  function getIdVal(classname){
      return document.querySelector(".box" + classname).id;
  }
  function checkIdSign(val1, val2, val3, sign){                                                  //check if the box that you picked is empty 
      if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
          return true;
      }
  }
  function selectWinner(){

      if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign))
      {  
          runBot = false;
          bot(runBot);
          setTimeout(()=>{
              resultBox.classList.add("show");
            //   playBoard.classList.remove("show");
          }, 700);
          wonText.innerHTML = `<p>${playerSign}</p> Won`;
      }
      else
      {
          if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
              runBot = false;
              bot(runBot);
              setTimeout(()=>{
                  resultBox.classList.add("show");                                          //if no one won show the draw
                //   playBoard.classList.remove("show");
              }, 700);
              wonText.textContent = "Draw!";
          }
      }
  }
  replayBtn.onclick = ()=>{
      window.location.reload();
  }                                                                                           //show the reply button at the end of the match