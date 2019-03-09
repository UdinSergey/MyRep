let field=0;
let direction = "right";
let elemRep=[];
let snakeRep=[];

function SnakeElem (){
    this.X=0;
    this.Y=0;
}

function Food(){
    this.X=0;
    this.Y=0;
}

let scoreWindow=document.createElement('input');
document.body.appendChild(scoreWindow);
scoreWindow.classList.add("score_windows");
scoreWindow.value="score:"+0;

function createField() {
    field = document.createElement('div');
    document.body.appendChild(field);
    field.classList.add("field");

    for(let i=0; i<100; i++){
        let excel = document.createElement('div');
        field.appendChild(excel);
        excel.classList.add("excel");
    }
    return(field);
}

createField();

let excelList = field.children;

let x = 0;
let y = 10;

for (let i=0; i<excelList.length; i++){
    x++;
    excelList[i].setAttribute("data-X", x);
    excelList[i].setAttribute("data-Y", y);
    if(x>10){
        x=1;
        y--;
        excelList[i].setAttribute("data-X", x);
        excelList[i].setAttribute("data-Y", y);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


if(localStorage.getItem('direction')!=null){
    direction=localStorage.getItem('direction');
}

    let snake=[];
    let randX = getRandomInt(4,9);
    let randY = getRandomInt(4,9);

if(localStorage.getItem('snake')!=null){
    snakeRep = JSON.parse(localStorage.getItem('snake'));
    console.log(snakeRep);
    for(let i =0; i< snakeRep.length; i++){
        snake.push(document.querySelector('[data-X="'+(snakeRep[i].X) +'"][data-Y="'+(snakeRep[i].Y)+'"]'));
    }
    randX = +snake[0].getAttribute("data-X");
    randY = +snake[0].getAttribute("data-Y");
}else{
    let elemThree = document.querySelector('[data-X="'+(randX-3) +'"][data-Y="'+randY+'"]');
    snake.unshift(document.querySelector('[data-X="'+randX +'"][data-Y="'+randY+'"]'));
    snake.push(document.querySelector('[data-X="'+(randX-1) +'"][data-Y="'+randY+'"]'));
    snake.push(document.querySelector('[data-X="'+(randX-2) +'"][data-Y="'+randY+'"]'));
    snake.push(elemThree);
}

for(let i=0;i<snake.length;i++){
    snake[i].classList.add("snake_body");
    snake[0].classList.add("snake_head");
    snake[0].classList.add("right");
    snake[0].classList.remove("snake_body");
}

let score = snake.length-1;
scoreWindow.value="score:"+score;

    function createFood(){
            let food = document.querySelector('[data-X="'+(getRandomInt(1,10)) +'"][data-Y="'+(getRandomInt(1,10))+'"]');
            if(food.classList.contains("snake_body")==false && food.classList.contains("snake_head")==false ){
                food.classList.add("food");
                let foodobj = new Food();
                foodobj.X=food.getAttribute("data-X");
                foodobj.Y=food.getAttribute("data-Y");
                let fooddone = JSON.stringify(foodobj);
                localStorage.setItem('food', fooddone);
            }else{
                createFood();
            }
    }

    if(localStorage.getItem('food')!=null){
        let saveFood = JSON.parse(localStorage.getItem('food'));
        let food = document.querySelector('[data-X="'+(saveFood.X) +'"][data-Y="'+(saveFood.Y)+'"]');
        food.classList.add("food");
    }else{
        createFood();
    }


function move() {
    snake[0].classList.remove("snake_head");
    snake[0].classList.add("snake_body");
    let b = snake.length-1;
    snake[b].classList.remove("snake_body");
    snake.pop();
    if(direction=="right"){
        let a=+snake[0].getAttribute("data-X");
        snake[0].classList.remove("right");
        snake[0].classList.remove("left");
        snake[0].classList.remove("up");
        snake[0].classList.remove("down");
        if(a<10){
            a++;
            snake.unshift(document.querySelector('[data-X="'+a +'"][data-Y="'+randY+'"]'));
        }else{
            a=1;
            snake.unshift(document.querySelector('[data-X="'+a +'"][data-Y="'+randY+'"]'));
        }
        snake[0].classList.add("snake_head");
        snake[0].classList.add("right");
        randX=a;
        console.log(snake);
    }else if(direction=="left"){
        let a=+snake[0].getAttribute("data-X");
        snake[0].classList.remove("right");
        snake[0].classList.remove("left");
        snake[0].classList.remove("up");
        snake[0].classList.remove("down");
        if(a>1){
            a--;
            snake.unshift(document.querySelector('[data-X="'+a +'"][data-Y="'+randY+'"]'));
        }else{
            a=10;
            snake.unshift(document.querySelector('[data-X="'+a +'"][data-Y="'+randY+'"]'));
        }
        snake[0].classList.add("snake_head");
        snake[0].classList.add("left");
        randX=a;
    }else if(direction=="up"){
        let a=+snake[0].getAttribute("data-Y");
        snake[0].classList.remove("right");
        snake[0].classList.remove("left");
        snake[0].classList.remove("up");
        snake[0].classList.remove("down");
        if(a<10){
            a++;
            snake.unshift(document.querySelector('[data-X="'+randX+'"][data-Y="'+a +'"]'));
        }else{
            a=1;
            snake.unshift(document.querySelector('[data-X="'+randX+'"][data-Y="'+a +'"]'));
        }
        snake[0].classList.add("snake_head");
        snake[0].classList.add("up");
        randY=a;
    }else if(direction=="down"){
        let a=+snake[0].getAttribute("data-Y");
        snake[0].classList.remove("right");
        snake[0].classList.remove("left");
        snake[0].classList.remove("up");
        snake[0].classList.remove("down");
        snake[0].classList.remove("right");
        if(a>1){
            a--;
            snake.unshift(document.querySelector('[data-X="'+randX+'"][data-Y="'+a +'"]'));
        }else{
            a=10;
            snake.unshift(document.querySelector('[data-X="'+randX+'"][data-Y="'+a +'"]'));
        }
        snake[0].classList.add("snake_head");
        snake[0].classList.add("down");
        randY=a;
        console.log(snake);
    }
    for(let i=0; i<snake.length; i++){
        let snakeElem={};
        snakeElem [`snakeElem${i}`] = new SnakeElem();
        snakeElem.X= snake[i].getAttribute("data-X");
        snakeElem.Y=snake[i].getAttribute("data-Y");
        elemRep.push(snakeElem);
        let doneElemRep = JSON.stringify(elemRep);
        localStorage.setItem('snake', doneElemRep);
        localStorage.setItem('direction', direction);
    }
    elemRep=[];
    for (let i=0; i<excelList.length; i++){
        let first = excelList[i].classList.contains("snake_head");
        let second = excelList[i].classList.contains("food");
        let three = excelList[i].classList.contains("snake_body");
        if(first==true && second==true){
            excelList[i].classList.remove("food");
            let lastElem=snake[snake.length-1];
            snake.push(lastElem);
            createFood();
        }else if(first==true && three==true){
            alert("Игра окончена");
            localStorage.removeItem('snake');
            localStorage.removeItem('direction');
            localStorage.removeItem('food');
            window.location.reload();
        }
        score = snake.length-1;
        scoreWindow.value="score:"+score;
    }
}

let interval = setInterval(move, 1000);

window.addEventListener("keydown", function(event){
    if(event.keyCode ==38 && direction!="down"){
        direction="up";
    }else if(event.keyCode ==39 && direction!="left"){
        direction="right";
    }else if(event.keyCode ==40 && direction!="up"){
        direction="down";
    }else if(event.keyCode ==37 && direction!="right"){
        direction="left";
    }
});

