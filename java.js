let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");
let newg = document.querySelector("#newg");
let whoWins = document.querySelector("#whoWins");
let msgCont = document.querySelector(".msg");

let turnO= true;
let count = 0;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetbtn = () =>{
    turnO = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText="";
        msgCont.classList.add("hide");
    });
}
const showWinner = (winning) =>{
    whoWins.innerText = `winner is ${winning} `; 
    msgCont.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    });

}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.style.color ="white";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.style.color ="white";
            box.innerText= "X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        checkwinner();
        if(count == 9)
        {
            whoWins.innerText = "ops no winner";
            msgCont.classList.remove("hide");

        }
    });
});

const checkwinner = () =>
{
    for(let pattern of win){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 == posval2 && posval2 === posval3 && posval3 === posval1)
            {
                console.log("winner", posval1);
                showWinner(posval1);
            }
        }
    }
}

newg.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);
