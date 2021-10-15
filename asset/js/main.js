const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
const btnArrowUp = document.querySelector('.frecciaup')
const btnArrowDown = document.querySelector('.frecciadown')
const selectedImage = document.getElementById('selectedImage')
const titolo = document.getElementById('titolo')
const sottotitolo = document.getElementById('sottotitolo')
const imgOne = document.getElementById('imgone')
const listImages =  document.getElementById('listImage')

let selected =0

for (let i = 0; i < items.length; i++) {
    const newBox = `<div class="boxstyle unselectedImg" id="${i}"><img class="imgstyle" src="./asset/${items[i]}" alt="pippo"></div>`;
    
    listImages.insertAdjacentHTML('beforeend',newBox);
}



imgOne.src=`./asset/${items[selected]}`;
titolo.innerHTML=title[selected];
sottotitolo.innerHTML=text[selected];
let selectedImg=document.getElementById(selected);
selectedImg.className="boxstyle selectedImg"


btnArrowDown.addEventListener('click', function(){
    selectedImg=document.getElementById(selected);
    selectedImg.className="boxstyle unselectedImg"
    selected++
    if (selected==5){
        selected=0
    }
    imgOne.src=`./asset/${items[selected]}`
    titolo.innerHTML=title[selected]
    sottotitolo.innerHTML=text[selected]
    selectedImg=document.getElementById(selected);
    selectedImg.className="boxstyle selectedImg"
})

btnArrowUp.addEventListener('click', function(){
    selectedImg=document.getElementById(selected);
    selectedImg.className="boxstyle unselectedImg"
    selected--
    if (selected == -1){
        selected=4
    }
    imgOne.src=`./asset/${items[selected]}`
    titolo.innerHTML=title[selected]
    sottotitolo.innerHTML=text[selected]
    selectedImg=document.getElementById(selected);
selectedImg.className="boxstyle selectedImg"
})