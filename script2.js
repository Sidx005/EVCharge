const button=document.getElementById('Mode');
const form1 = document.querySelector('.form');
const form2 = document.querySelector('.Fastchargeform');
let opt1 = document.getElementById('options1');
let opt2 = document.getElementById('options2');
let option = document.querySelector('.options');

let proceedContainer = document.getElementById('proceedContainer'); 
let proceedContain = document.getElementById('proceedContainer2'); 
const menu = document.querySelector('.sidebar');

function toggle2BackgroundColor(){

    const contain=document.getElementById('container');
       const anchor= document.querySelectorAll('a');
       const moon=document.querySelector('#Moon');
       const sun=document.querySelector('#Sun');
       const bar = document.getElementById('bars');
       if(contain.style.backgroundColor=='white'){
        contain.style.background='url("download - Copy.jpeg") center/cover no-repeat';    
                bar.style.color='white';
        form1.style.backgroundColor = 'purple';
                form1.style.color = 'white';
                form2.style.color = 'white';
                form2.style.backgroundColor = 'purple';
        for(let i=0;i<anchor.length;i++){
            anchor[i].style.color='white';
        } moon.style.transform='rotate(360deg) scale(0)';
        sun.style.transform='rotate(0) scale(1)';
        menu.style.background="linear-gradient(90deg,blue,purple)"

}else{
    contain.style.background = 'white';
    bar.style.color='black';
    form1.style.backgroundColor = 'yellow';
form2.style.backgroundColor = 'yellow'; 
form1.style.color = 'black';
form2.style.color = 'black';
        for ( let i= 0; i < anchor.length; i++) {
            
           anchor[i].style.color='black';
       }
moon.style.transform='rotate(0) scale(1)';
sun.style.transform='rotate(360deg) scale(0)';
menu.style.background="yellow"

}
}
function showbar() {
    menu.style.display='flex';
    menu.style.transform='transition(0.5s)'
}

function closebar(){
    menu.style.display='none';
}

function hideoptions(formId, amtId) {
    option.style.display = 'none';
    opt1.style.display = 'none';
    opt2.style.display = 'none';

    if (formId === 'form1') {
        form1.style.display = 'block';
        
    } else if (formId === 'form2') {
        form2.style.display = 'block';
       
    }

    // Hide the other form
    form1.style.display = formId === 'form' ? 'block' : 'none';
    form2.style.display = formId === 'form2' ? 'block' : 'none';

    // Clear the previous result
    document.getElementById(amtId).innerHTML = '';
    proceedContainer.style.display = 'none'; // Hide the proceed button
}

function displayamt(amtId) {
    
    const amount = parseInt(document.getElementById('hoursinput').value);
    const result = amount * 10;
    const amountDisplay = document.getElementById(amtId);
    amountDisplay.innerHTML ="The amount is:"+ result + "/-";
    proceedContainer.style.display = 'block';
  

}

function Fastdisplayamt(amtId) {
    const amount2 = parseInt(document.getElementById('fastinput').value);
    const result2 = amount2 * 50;
    const amount2Display = document.getElementById(amtId);
    amount2Display.innerHTML = "The amount is:"+result2 + "/-";

    proceedContain.style.display = 'block';

}