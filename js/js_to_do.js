const sec2 = document.querySelector(".sec2");
const ul = document.querySelector(".toDo");
const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector(".toDoInput")

const TODOS = "toDos"; //key&name
let toDoList = []; //list of todo
let idNum=0; //edit bug

/*
- list비우기
- 클릭시 TODOS 삭제 후 화면 reload(남아있는 이슈 제거 위해)
*/
const cleanBtn = sec2.querySelector(".clean");
cleanBtn.addEventListener("click", function(){
    const ans = confirm("ToDoList를 모두 삭제 할까요? 정말? 진짜로?")
    if(ans){
        localStorage.removeItem(TODOS);
        window.location.reload();
    }
});

/*
- display 보이기,숨기기
*/
function showing(){
    const USER = localStorage.getItem("currentUser")
    if (USER === null)
        sec2.style.display="none";
    else 
        sec2.style.display="block";
}

/*
- localStorage에 저장하기.
- 번호 클릭 당한 li의 id와, 남아있는 항목의 id를 비교,
다른 것만을 return(남기는 작업)
- 저장
*/
function handleFinClick(event){
    const btn = event.target;
    const li = btn.parentNode;
    ul.removeChild(li);
    const cleanToDos = toDoList.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDoList = cleanToDos;
    saveToDos();
}

/*
- key인 TODOS를 STRING형태로 저장한다.
*/
function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDoList)); // string형태로 저장. 불러올 때는 .parse형태로 다시 변환.
}

/*
- ul내부에 li>text형식으로 appenChild해준다.
- 최대 리스트는 11개로 제한을 건다(height값), 초과시 alert
- 버튼 클릭시 삭제
- id값 배정하기, 저장
*/
function printToDo(text){
    if(toDoList.length < 11){
        const newId = idNum;
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "✔";
        btn.addEventListener("click",handleFinClick);
        const span = document.createElement("span");
        span.innerHTML=`&nbsp&nbsp&nbsp${text}`;
        li.appendChild(btn);
        li.appendChild(span);
        li.id = newId;
        ul.appendChild(li);
        const toDoOBJ={
            id : newId,
            text : text   
        }
        toDoList.push(toDoOBJ);
        idNum++;
        saveToDos();
    }
    else
        alert("Toooooo much TODO today..😥")
}

/*
- input값 출력과 값 지우기
*/
function handleSubmit(event){
    event.preventDefault();
    const toDoText = toDoInput.value;
    printToDo(toDoText);
    toDoInput.value = "";
}

/*
- submit은 form에서 작용
- HTML UL의 위치 조심하기
*/
function addToDos(){
    toDoForm.addEventListener("submit",handleSubmit);
}

/*
localStorage에 있는 TODOS(key)를 가져온다.
- 만약 비어있다면 addToDos를 통해 from에서 제출된 값을 handlesubmit함수로 실행
- 값이 있다면
- 만약 localStorage에 currentUser가 있다면 sec2의 display를 block으로 바꿈.
*/
function loadToDos(){
    const currentToDo = localStorage.getItem(TODOS);
    if(currentToDo === null){ //if isempty(localStorage) > addTodos
        addToDos();
    }
    else{ //if is(localStorgae) > print all object in Todolist
        const parseToDo = JSON.parse(currentToDo);
        parseToDo.forEach(function(todo){
            printToDo(todo.text)
        });
        addToDos();
    }
}

function init(){
    showing();
    loadToDos();
}

init();