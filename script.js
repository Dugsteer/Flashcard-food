// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const mainpic = document.getElementById('mainpic');
const blue = window.matchMedia("(max-width: 800px)");


//switch introduction pic
function switchpic(){
    switch (mainpic.innerHTML) {
        case '<img src="img/fashion/fashion1.png" alt="decorative">' :
            mainpic.innerHTML = '<img src="img/fashion/fashion2.png" alt="decorative">';
            break;
        case '<img src="img/fashion/fashion2.png" alt="decorative">' :
            mainpic.innerHTML = '<img src="img/fashion/fashion3.png" alt="decorative">';
         break;
        case '<img src="img/fashion/fashion3.png" alt="decorative">' :
            mainpic.innerHTML = '<img src="img/fashion/fashion4.png" alt="decorative">';
         break;
        case '<img src="img/fashion/fashion4.png" alt="decorative">' :
            mainpic.innerHTML = '<img src="img/fashion/fashion5.png" alt="decorative">';
         break;
    default: 
    mainpic.innerHTML = '<img src="img/fashion/fashion1.png" alt="decorative">' 
}
}
    setInterval(switchpic, 2000);

//Play applause 

function clapping(){
    const claps = new Audio("sounds/applause.wav");
    claps.play();
}

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//Change main pic

// setInterval(picChanger, 5000);
// picChanger();

// function picChanger(){
//   mainpic.innerHTML === '<img src="img/froggy.png" alt="decorative">' ? mainpic.innerHTML = '<img src="img/froggy2.png" alt="decorative">' :  mainpic.innerHTML ='<img src="img/froggy.png" alt="decorative">'
// }

//FLIP CARDS

const inner = document.getElementById('inner');

function flipMe(){
    inner.classList.toggle('turnMe');
}

//CHANGE CARDS
const count = document.getElementById('count');

var imageList = [
    "belt.jpg",
    "boots.jpg",
    "cap.jpg",
    "dress.jpg",
    "flip-flops.jpg",
    "gloves.jpg",
    "hat.jpg",
    "hoodie.jpg",
    "jacket.jpg",
    "jeans.jpg",
    "jumper.jpg",
    "pyjamas.jpg",
    "raincoat.jpg",
    "sandals.jpg",
    "scarf.jpg",
    "shirt.jpg",
    "shoes.jpg",
    "skirt.jpg",
    "socks.jpg",
    "trainers.jpg",
    "trousers.jpg",
    "tshirt.jpg",
    "umbrella.jpg"
];


let y = flashcard__text.innerHTML;
let z = y.concat('.png');
let x = imageList.indexOf(z);

function goForwards() {

    if (x < (imageList.length-1)) {
        x++;
            document.getElementById('art').src = ` img/${imageList[x]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x+1}/${imageList.length}`;
         return x;
    } else {
    
        document.getElementById('art').src = ` img/${imageList[imageList.length-1]}`;
        document.getElementById('flashcard__text').textContent = `${imageList[imageList.length-1].slice(0, -4)}`;
        count.innerHTML = `${imageList.length}/${imageList.length}`;
                 x = 0;
        x = imageList.length;
        return x;
    }
}

function goBackwards() {
        if (x > 0) {
            x--;
                document.getElementById('art').src = ` img/${imageList[x]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x+1}/${imageList.length}`;
            return x;
        } else {
            document.getElementById('art').src = ` img/${imageList[0]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
             x = 0;
             return x;
        }
    }
    


goForwards();
goBackwards();
  
  
