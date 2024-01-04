form.onsubmit=()=>{
    let li = document.createElement("li");
    let spanDel = document.createElement("span");
    let buttonDoing = document.createElement("span");
    let buttonDone = document.createElement("span");
       spanDel.onclick=()=>del(li);
      

    li.innerHTML = inputPassword2.value ; 
    spanDel.innerHTML = '<button type="button" class="btn btn-danger  rounded-1"  >DELETE</button>';
    buttonDoing.innerHTML='<button type="button"class="btn btn-outline-warning   rounded-1 me-1">DOING</button>'
    buttonDone.innerHTML='<button type="button" class="btn btn-outline-success rounded-1 me-1">DONE</button>'
    




    ul.appendChild(li);
    li.appendChild(spanDel);
    li.appendChild(buttonDoing);
    li.appendChild(buttonDone);

    inputPassword2.value="";

   return false;
}





function del(element){
    element.remove();
}








