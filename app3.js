
let count=0;
form.onsubmit=()=>{
    let li = document.createElement("li");
    let spanDel = document.createElement("span");
    let buttonDoing = document.createElement("span");
    let buttonDone = document.createElement("span");
   
  
       spanDel.onclick=()=>del(li);
      
  
    li.innerHTML = inputPassword2.value ; 
    spanDel.innerHTML = '<button type="button" class="btn btn-danger  rounded-1">DELETE</button>';
    buttonDone.innerHTML='<button type="button" class="btn btn-success rounded-1 me-1">DONE</button>'
  
  //incrementation
  document.getElementById('ul').appendChild(li);
  count++;
  document.getElementById('counter').innerHTML = 'All'+' '+count;

 

 //ajouter l element creer sur ul et li 
    ul.appendChild(li);
    li.appendChild(spanDel);
    li.appendChild(buttonDoing);
    li.appendChild(buttonDone);
    
    inputPassword2.value="";

    li.addEventListener('click', ()=>{
        li.classList.add('textebarre');
       
    })

    
   
    
   return false;
}

//button supprimer 

function del(element){
    element.remove();
}






//mode dark 
const toggleDark=() => {
    document.querySelector("body").setAttribute("data-bs-theme" , "dark");
    document.querySelector("#toggle").setAttribute("class","bi bi-moon-fill");

}


const togglelight=() => {
    document.querySelector("body").setAttribute("data-bs-theme" , "light");
    document.querySelector("#toggle").setAttribute("class","bi bi-moon");
    
}


const changesThemes= () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    toggleDark(): togglelight(); 
} 



