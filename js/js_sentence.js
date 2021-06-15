const korean = document.querySelector(".sentence .korean");
const english = document.querySelector(".sentence .english");
const author = document.querySelector(".sentence .author");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

/*
- 출력될 명언
*/
let sentence = [
    {
    "korean" : "많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.",
    "english" : "Seeing much, suffering much, and studying much, are the three pillars of learning.",
    "author": "- Benjamin Disraeli -"
},

    {
    "korean" : "게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
    "english" : "Ambition is a poor excuse for not having sense enough to be lazy.",
    "author" : "- Edgar Bergen -"
},

    {
    "korean" : "적의 침략은 저항할 수 있지만, 그 시대가 도래한 사상에는 저항할 수 없다.",
    "english" : "An invasion of armies can be resisted, but not an idea whose time has come.",
    "author" : "- Victor Hugo -"
},

    {
    "korean" : "약간의 운동만 필요한 게 아니라면, 금이 있는 곳을 파라.",
    "english" : "Dig where the gold is unless you just need some exercise.",
    "author" : "- John M. Capozzi -"
},

    {
    "korean" : "썰물이 빠졌을 때 비로소 누가 벌가벗고 헤엄쳤는지 알 수 있다.",
    "english" : "It's only when the tide goes out that you discover who's been swimming naked.",
    "author" : "- Warren Buffett -"
},

    {
    "korean" : "유머의 부재는 인생을 불가능으로 바꾼다.",
    "english" : "Total absence of humor renders life impossible.",
    "author" : "- Colette -"
},

    {
    "korean" : "지금이 제일 비참하다고 할 수 있는 동안은 아직 제일 비참한 게 아니다.",
    "english" : 'The worst is not So long as we can say, "This is the worst."',
    "author" : "- William Shakespeare -"
},

    {
    "korean" : "무엇을 비웃는가보다 한 인간의 성격을 더 잘 보여주는 것은 없다.",
    "english" : "Nothing shows a man's character more than what he laughs at.",
    "author" : "- Johann Wolfgang von Goethe -"
},

    {
    "korean" : "자신의 능력을 감추지 마라. 재능은 쓰라고 주어진 것이다. 그늘 속의 해시계가 무슨 소용이랴.",
    "english" : "Hide not your talents. They for use were made. What's a sundial in the shade.",
    "author" : "- Benjamin Franklin -"
},

    {
    "korean" : "우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다.",
    "english" : "I'm as proud of what we don't do as I am of what we do.",
    "author" : "- Steve Jobs -"
}

]

let num = Math.floor(Math.random()*sentence.length);

/*
- 클릭시 출력 명언 값 --
- 0보다 작아질경우 배열의 마지막 항목으로
*/
function leftHandler(){
    num--;
    if(num < 0){
        num=sentence.length-1;
    }
    printSentence();
}

/*
- 클릭시 출력 명언 값 ++
- 마지막 배열을 초과할경우 0번째로 항목으로
*/
function rightHandler(){
    num++;
    if(num == sentence.length){
        num=0;
    }
    printSentence();
}

/*
- 문장 출력
*/
function printSentence(){
    korean.innerHTML =`${sentence[num].korean}`;
    english.innerHTML =`${sentence[num].english}`;
    author.innerHTML =`${sentence[num].author}`;
}

function init(){
    btn1.addEventListener("click",leftHandler);
    btn2.addEventListener("click",rightHandler);
    printSentence();
}

init();