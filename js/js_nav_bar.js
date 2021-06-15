const bgmode = document.querySelector("#container");
const nav = document.querySelector("nav");
const optBtn = nav.querySelector(".optBtn")
optBtn.addEventListener("click", optToggle);
const optImg = optBtn.querySelector("img");
const bgBtn = nav.querySelector(".bgColor");
bgBtn.addEventListener("click", bgChange);
const outBtn = nav.querySelector(".logOut");
outBtn.addEventListener("click", logOut);
const help = nav.querySelector(".help");
help.addEventListener("click", helpHandler);

let BG;


function helpHandler(){
    alert("\nHOW TO USE ?\n\n1. 할 일을 적는 To-Do-List입니다.\n2. 페이지를 닫아도 설정이 유지됩니다.\n3. 눈이 아프면 다크모드를 사용해 보세요.\n4. 로그아웃이 가능해요.\n5. 모바일/테블릿 버전이 있어요. 화면을 줄여보세요.");
}

function setBg(BG){
    if(BG == "on"){
        bgBtn.innerHTML="LIGHTMODE"
        document.documentElement.style.setProperty("--bg-color","rgb(070, 070, 070)");
        document.documentElement.style.setProperty("--color","rgb(235, 235, 235)");
        document.documentElement.style.setProperty("--nav-bg-color","rgb(100,100,100)");
        optImg.src="images/gear_dark.png"
    }
    else{
        bgBtn.innerHTML="DARKMODE"
        document.documentElement.style.setProperty("--bg-color","rgb(235, 235, 235)");
        document.documentElement.style.setProperty("--color","rgb(070, 070, 070)");
        document.documentElement.style.setProperty("--nav-bg-color","rgb(255,255,255)");
        optImg.src="images/gear_light.png"
    }
}

/* 
스토리지에서 값을 확인한다.
만약 on상태에서 눌렀을 경우 -> off로 전환.
off에서 눌렀을 경우 -> on으로 전환.
*/
function bgChange(){
    if(BG == "off"){
        localStorage.setItem("bgMode","on");
        BG = localStorage.getItem("bgMode");
    }
    else{
        localStorage.setItem("bgMode","off");
        BG = localStorage.getItem("bgMode");
    }
    setBg(BG);
}

function optToggle(){
    optBtn.classList.toggle("btnOn");
}


/* 
- 버튼 클릭시 localStorage에 currentUser Key삭제
- 윈도우 재 시작으로 화면 숨기기
*/
function logOut(){
    const ans = confirm("기다릴게요.. 꼭 또 봐요..");
    if(ans){
        localStorage.removeItem("currentUser");
        localStorage.removeItem("coords");
        window.location.reload();
    }
}

/*
- 만약 로그인(localStorage에 이름이 있을경우) 되어 있으면 navBar보이기
*/
function loadNavBar(){
    const USER = localStorage.getItem("currentUser");
    if (USER === null)
        nav.style.display="none";
    else 
        nav.style.display="flex";
}

function checkBg(){
    BG = localStorage.getItem("bgMode");
    if(BG===null)
        localStorage.setItem("bgMode","off");
    setBg(BG);
}

function init(){
    loadNavBar();
    checkBg();
}

init();