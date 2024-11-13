let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, playerO
let count = 0;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        count++;

        if(turn0){
            box.innerText = "O";
            box.classList.add("green");
            turn0 = false;
        }else{
            box.innerText = "X";
            box.classList.add("yellow-green");
            turn0 = true;
        }
        box.disabled = true;

        if(count === 9){
            draw();
        }

        checkWinner();
    });
});

const draw = () => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Its a Draw, click button to start New Game.`
};

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" , pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};

const disableBoxs = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const enableBoxs = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxs();
};

const resetGame = () => {
    turn0 = true;
    enableBoxs();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);