const container = document.querySelector("#my_box");
const form = container.querySelector(".form");
const input = form.querySelector("input")
const id_box = container.querySelector(".id_box");

const USER = "currentUser";

/*
- 이름 저장
*/
function saveUSER(name){
    localStorage.setItem(USER, name);
}

/*
- form숨기기
- id_box에 display 설정하기
*/
function sayHello(name){
    form.classList.remove("showing");
    id_box.classList.add("showing");
    id_box.querySelector(".hi").innerHTML = `Good day, ${name}`;
}

/*
- 이름 값 저장
*/
function handleSubmit(event){
    const name = input.value;
    sayHello(name);
    saveUSER(name);
    loadNavBar();
    showing();
}

/*
- display 속성 전환으로 화면에 보이기.
*/
function askName(){
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

/*
- localStorage에 저장된 유저가
- 있다 > 화면 전환 및 인사
- 없다 > 이름 물어 보기
*/
function loadHello(){
    const currentUser = localStorage.getItem(USER);
    if(currentUser == null){
        askName();
    }
    else{
        sayHello(currentUser);
    }
}

function init(){
    loadHello();
}

init();