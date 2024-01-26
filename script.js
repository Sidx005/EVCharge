const button=document.getElementById('Mode');
let menu;


function toggleBackgroundColor(){

const contain=document.getElementById('container');
   const anchor= document.querySelectorAll('a');
   const moon=document.querySelector('#Moon');
   const sun=document.querySelector('#Sun');
   const about=document.querySelector('.describe');
   const offer=document.querySelector('.facilities');
   const cards=document.querySelectorAll('.cards');
   const contact=document.querySelector('.contactUs');
   const aboutUs=document.querySelector('.Aboutdiv');
       const bar = document.getElementById('bars');
       menu = document.querySelector('.sidebar');

if(contain.style.backgroundColor=='white'){
contain.style.background='url("download - Copy.jpeg") center/cover no-repeat';

        bar.style.color='white';

for(let i=0;i<anchor.length;i++){
    anchor[i].style.color='white';
} moon.style.transform='rotate(360deg) scale(0)';
        sun.style.transform='rotate(0) scale(1)';
        about.style.color='white';
        offer.style.color='white';
      

        for (let i = 0; i < cards.length; i++) {
           cards[i].style.backgroundColor='black';

        }           
        contact.style.color='white';
        aboutUs.style.color='white';
        menu.style.background="linear-gradient(90deg,blue,purple)";


        
}
else{
    contain.style.background = 'white';
    bar.style.color='black';

        for ( let i= 0; i < anchor.length; i++) {
            
           anchor[i].style.color='black';
       }
moon.style.transform='rotate(0) scale(1)';
sun.style.transform='rotate(360deg) scale(0)';
about.style.color='black';
offer.style.color='black';
for (let i = 0; i < cards.length; i++) {
   cards[i].style.backgroundColor=' rgb(50, 221, 164)';
    
}
contact.style.color='black';
aboutUs.style.color='black';
    menu.style.background="yellow"

}
} 
function showbar() {

     menu = document.querySelector('.sidebar');

    menu.style.display='flex';
    menu.style.transform='transition(0.5s)'
}

function closebar(){
     menu = document.querySelector('.sidebar');

    menu.style.display='none';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
       section.scrollIntoView({ behavior: 'smooth' });
    }
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