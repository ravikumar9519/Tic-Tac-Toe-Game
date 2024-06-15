let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let msg = document.querySelector(".msg");

let turn = true;
let ct=0;
const a = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const reset = ()=>{
  turn = true;
  ct=0;
  msg.innerText="";
  msg.classList.add("hide")
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
  
}
const drawGame=()=>{
  msg.innerText="Match has been Drawn!!!";
  msg.classList.remove("hide");
  for(let box of boxes){
    box.disabled=true;
  }
}
const showWinner = (s)=>{
  msg.innerText=`Congrats!!!!, Winner is ${s}`;
  msg.classList.remove("hide");
  for(let box of boxes){
    box.disabled=true;
  }
}
boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
        //console.log("clicked");
        ct++;
        if(turn){
          box.innerText = "O";
          turn = false;
        }
        else {
          box.innerText = "X";
          turn = true;
        }
        box.disabled = true;
        let f=false;
        for(let arr of a){
          // console.log(arr[0],arr[1],arr[2]);
           let p1=boxes[arr[0]].innerText;
           let p2=boxes[arr[1]].innerText;
           let p3=boxes[arr[2]].innerText;
           if(p1!="" && p2!="" && p3!=""){
              if(p1==p2 && p2==p3){
                 showWinner(p1);
                 f=true;
              }
           }
        }
        if(ct === 9 && f===false){
            drawGame();
        }
        
      });
});

rstbtn.addEventListener("click",reset);
