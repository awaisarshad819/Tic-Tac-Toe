let box = document.querySelectorAll(".tile-box");
let message = document.querySelector(".winner-message");
let resetGame = document.querySelector(".reset-game");
let newGame = document.querySelector(".new-game");

message.classList.add("hide");
resetGame.classList.add("hide");
newGame.classList.add("hide");
let turn = "X";
box.forEach((box, index) => {
    box.addEventListener("click", (e)=>{
        
            if(turn === "X"){
                resetGame.classList.remove("hide");
                box.innerText = turn;
                turn = "O";
                
            }
            else if(turn === "O"){
                box.innerText = turn;
                turn = "X";
                
            }
            box.classList.add("disabled");
        checkWinningCondition();
        
        
    });
});

const showWinnerMessage = (turn)=>{
    message.classList.remove("hide");
    message.innerText = `Congratulations! Winner is ${turn}`;
    resetGame.classList.add("hide");
    newGame.classList.remove("hide");
    box.forEach((box)=>{
        
        box.classList.add("disabled");
        
    });
}

newGame.addEventListener("click", ()=>{
    startNewGame();
});

resetGame.addEventListener("click", ()=>{
    
    startNewGame();
});

const startNewGame = () =>{
        newGame.classList.add("hide");
        resetGame.classList.add("hide");
        message.classList.add("hide");
        message.innerText = "";
    box.forEach((box)=>{
        
        box.innerText = "";
        box.classList.remove("disabled");
        
    });
}



function checkWinningCondition(){
   
    if((box[0].textContent === "X" && box[1].textContent === "X" && box[2].textContent === "X") || (box[0].textContent === "O" && box[1].textContent === "O" && box[2].textContent === "O") ){
        console.log(`${box[0].textContent} Winns`);
        showWinnerMessage(box[0].textContent);
    }
    else if((box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") || (box[3].textContent === "O" && box[4].textContent === "O" && box[5].textContent === "O") ){
        showWinnerMessage(box[3].textContent);
    }
    else if((box[6].textContent === "X" && box[7].textContent === "X" && box[8].textContent === "X") || (box[6].textContent === "O" && box[7].textContent === "O" && box[8].textContent === "O") ){
        showWinnerMessage(box[6].textContent);
    }
    else if((box[0].textContent === "X" && box[3].textContent === "X" && box[6].textContent === "X") || (box[0].textContent === "O" && box[3].textContent === "O" && box[6].textContent === "O") ){
        showWinnerMessage(box[0].textContent);
    }
    else if((box[1].textContent === "X" && box[4].textContent === "X" && box[7].textContent === "X") || (box[1].textContent === "O" && box[4].textContent === "O" && box[7].textContent === "O") ){
        showWinnerMessage(box[1].textContent);
    }
    else if((box[2].textContent === "X" && box[5].textContent === "X" && box[8].textContent === "X") || (box[2].textContent === "O" && box[5].textContent === "O" && box[8].textContent === "O") ){
        showWinnerMessage(box[2].textContent);
    }
    else if((box[0].textContent === "X" && box[4].textContent === "X" && box[8].textContent === "X") || (box[0].textContent === "O" && box[4].textContent === "O" && box[8].textContent === "O") ){
        showWinnerMessage(box[0].textContent);
    }
    else if((box[2].textContent === "X" && box[4].textContent === "X" && box[6].textContent === "X") || (box[2].textContent === "O" && box[4].textContent === "O" && box[6].textContent === "O") ){
        showWinnerMessage(box[2].textContent);
    }
}
