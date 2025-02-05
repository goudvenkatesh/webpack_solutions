let textEl=document.getElementById('text');
let readMoreBtnEl=document.getElementById('readButton');


let fullText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting in-dustry"
let shortText=fullText.slice(0,30)+"...";

let isCollapse=true;

function onToggleText(){
    if (isCollapse){
        textEl.textContent=fullText;
        readMoreBtnEl.textContent='ReadLess';   
    }else{
        textEl.textContent=shortText;
        readMoreBtnEl.textContent='ReadMore..';
    }
    isCollapse=!isCollapse;
}