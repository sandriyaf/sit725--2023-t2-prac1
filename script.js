function changeText(){
    //this should change the display text
    let textList=['hey','hii','hru','hello'];
    let randomNumber = getRandomNumber(0, textList.length - 1);

    console.log(randomNumber);
    document.getElementById('header').innerHTML=textList[randomNumber];

}

function getRandomNumber(min,max){
    //generate a random number between a range
    return Math.floor(Math.random()*(max-min+1)+min);
}