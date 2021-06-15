const clock = document.querySelector("#clock");
const time = clock.querySelector("h1");
const secTime = clock.querySelector(".sec");
const color = document.documentElement.style.getPropertyValue("--color");


/*
- 시간을 시:분:초 단위로 화면에 출력하는 역할을 한다.
- 50-59초(마지막 10초)는 붉은색으로 색 전환을 준다.
*/
function printClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    if(sec>=50)
        secTime.style.color="#d11507";
    else{
        secTime.style.color=color;
        time.style.color=color;
    }
        
    time.innerHTML = `${hours<10 ? `0${hours}`:hours}:${min<10 ? `0${min}`:min}:`;
    secTime.innerHTML=`${sec<10 ? `0${sec}`:sec}`;
}

function init(){
    printClock();
    setInterval(printClock,1000);
}

init();