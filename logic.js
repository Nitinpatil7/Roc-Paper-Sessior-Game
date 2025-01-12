const choices=document.querySelectorAll('.element');
const show_text=document.querySelector('#statement');
const user_count = document.querySelector('#your') ;
const computer_count = document.querySelector('#computer') 


let user=0;
let computer=0;

const computerchoice=()=>{
    let options=['rock','paper','sessior'];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
const showWinner=(winner,userchoice,comchoice)=>{
    if(winner){
        show_text.innerText=`You Win. ${userchoice} beats ${comchoice}`;
        show_text.style.backgroundColor='green';
        user++;
        user_count.innerText=user;
    } else{
        show_text.innerText=`You Lose!  ${comchoice} beats ${userchoice}`;
        show_text.style.backgroundColor='red';
        computer++;
        computer_count.innerText=computer;
    }
}
const playgame= (userchoice)=>{
    console.log('User Choice: ',userchoice);
    let comchoice=computerchoice();
    console.log('computer choice: ',comchoice);

    if(userchoice==comchoice){
        show_text.innerText='Game Was Draw. Play Again!'
        show_text.style.backgroundColor='black';

    } else {
        let winner=true;
        if(userchoice=='rock'){
            winner= comchoice=='paper'? false : true;
        } else if(userchoice='paper'){
            winner=comchoice=='sessior'? false: true;
        } else if(userchoice=='sessior'){
            winner=comchoice=='rock'? false:true;
        }
        showWinner(winner,userchoice,comchoice);
    }

}

choices.forEach((choice) => {
    console.log(choices);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute('id')
        playgame(userchoice);
    })    
});