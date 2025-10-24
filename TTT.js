let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetGame");
let newGame = document.querySelector("#newBtn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const ResetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
let enableBoxes = () => {
     for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    disabledBox();
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(let patterns of winPattern){
        let pos1Val = boxes[patterns[0]].innerText; 
        let pos2Val = boxes[patterns[1]].innerText; 
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}
resetBtn.addEventListener("click", ResetGame);
newGame.addEventListener("click", ResetGame);