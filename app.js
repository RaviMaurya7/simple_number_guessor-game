let max=10,
    min=1,
    guessLeft=3;
   winningNum=Random(min,max);
   document.body.style.background='pink';
const game=document.querySelector('#game'),
      minNO=document.querySelector('.min-num'),
      maxNO=document.querySelector('.max-num');
      guessInput=document.querySelector('#guess-input'),
      guessBtn=document.querySelector('#guess-btn'),
      message=document.querySelector('.message');
minNO.textContent=min;
maxNO.textContent=max;
game.addEventListener('mousedown', function(e){
    if(e.target.className==='play-again')
    {
    window.location.reload();
    }
});
guessBtn.addEventListener('click',function(e){
   let guess=parseInt(guessInput.value);
   if(isNaN(guess)|| guess<min|| guess>max)
   {
   setMessage(`Please enter a number between #{min} and #{max}`, 'red');}

   if(guess===winningNum)
   {
       e.target.style.backgroundColor='blue';
       document.body.style.background='orange';
       gameOver(true,  `${winningNum} is correct and you Won CHILL !!!!`);
   }
   else
   {
       guessLeft-=1;
   if(guessLeft===0)
   {
            e.target.style.backgroundColor='red';
          document.body.style.background='black';
       gameOver(false,`${winningNum} was correct number but you lost.. Don't worry try again!!`);
    }
   else
       {
           guessInput.style.bordercolor='red';
           guessInput.value="";
           setMessage(`${guess} is NOT correct number now you have only ${guessLeft} guess left`, 'red');
       }
    }
});
function gameOver(won, msg)
{
    won===true ? color='green'  : color='red';
    guessInput.disabled=true;
    guessInput.style.bordercolor=color;
    message.style.color=color;
    setMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
function setMessage(msg, color)
{
message.textContent=msg;
message.style.color=color;
}
function Random(min,max)
{
    return (Math.floor(Math.random()*(max-min+1)+min));
}
