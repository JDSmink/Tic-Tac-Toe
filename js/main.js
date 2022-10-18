let x = "X"
let o = "O"
let nextPlayer;
let firstPlayer = x
let SecondPlayer = o


let blockOne = document.querySelector("#text1")
let blockTwo = document.querySelector("#text2")
let blockThree = document.querySelector("#text3")
let blockFour = document.querySelector("#text4")
let blockFive = document.querySelector("#text5")
let blockSix = document.querySelector("#text6")
let blockSeven = document.querySelector("#text7")
let blockEight = document.querySelector("#text8")
let blockNine = document.querySelector("#text9")

nextPlayer = nextPlayer = firstPlayer

function nextPlayerFunction(){
    if(nextPlayer == firstPlayer){
        nextPlayer = nextPlayer = SecondPlayer;
    } else if (nextPlayer == SecondPlayer){
        nextPlayer = nextPlayer = firstPlayer 
    }
}


function blockOneClick(){
    blockOne.innerHTML = nextPlayer;

    nextPlayerFunction()
}

function blockNineClick(){
    blockNine.innerHTML = nextPlayer
    
    blockNine.setAttribute("disabled, disabled")

    nextPlayerFunction()
}

