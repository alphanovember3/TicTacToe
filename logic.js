let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".newbtn");
let resetbtn = document.querySelector(".resetbtn");

let msg = document.querySelector(".msg");
let msgp = document.querySelector(".msg-p");

let turnO = true;
//this two var is used to ckeck draw
let flag = 0;
let count =0;


//wiining probabilities of position

const winnerpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 

//show winner function that will print the msg 

let showWinner = (winner)=>{

    msg.classList.remove("hide");
    
    msgp.innerText = `Congrats ! Winner is ${winner}`;

}
//function for new game

newbtn.addEventListener("click",()=>{

    boxes.forEach((box)=>{

        box.innerText = "";
    })

   
    msg.classList.add("hide");
    boxes.forEach((box)=>{
        box.disabled = false;
        box.classList.remove("Xcolor");
    });
    
    turnO = true;
    count = 0;
    flag = 0;

});

//function for reset game

resetbtn.addEventListener("click",()=>{

    boxes.forEach((box)=>{

        box.innerText = "";
    })

    msg.classList.add("hide");

    boxes.forEach((box)=>{
        box.disabled = false;
        box.classList.remove("Xcolor");
    });
    
    turnO = true;
    count = 0;
    flag = 0;
    

});




//function to check winner

let checkwinner = ()=>{

    winnerpat.forEach((pat)=>{

        
        if(boxes[pat[0]].innerText != "" && boxes[pat[1]].innerText != "" && boxes[pat[2]].innerText != ""){

            if(boxes[pat[0]].innerText == boxes[pat[1]].innerText && boxes[pat[0]].innerText == boxes[pat[2]].innerText){

                console.log(" winner");
                flag = 1;
                //fuction to print winner
                showWinner(boxes[pat[0]].innerText);

               
            }
        }
    });
    
}

//function to check a Draw

checkdraw = ()=>{

    if(count == 9 && flag == 0){
        msg.classList.remove("hide");

    msgp.innerText = `Ohh ! Game is Draw `;

    }

}


//adding event listner to the box

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
    
        if(turnO){
            box.innerText = "O";
            box.classList.add("Xcolor");
            turnO = false;
            
        }
        else{
            box.innerText = "X";
            turnO = true;
            
        }
        box.disabled = true;
        count++;
        checkwinner();
        checkdraw();
    });    
    
});



