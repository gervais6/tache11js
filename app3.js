let input = document.getElementById('inputs');
let ul = document.getElementById('ul');
let toggleDark = document.getElementById('modeDark');
let count=0;
let body = document.querySelector('body');
let background=document.getElementById('Todolist');
let inputs=document.getElementById('inputs');
let radioNoLabel1=document.getElementById('radioNoLabel1');
let counter=document.getElementById('counter');
let container1=document.getElementById('container1');
let span1=document.getElementById('span1');



    form.addEventListener("dblclick",function(){
        let li =document.createElement('li');
        let btnSupprimer =document.createElement('span');
        let checked =document.createElement('span');
        

        btnSupprimer.onclick=()=>del(li);
        
        li.innerText=input.value ; 
        btnSupprimer.innerHTML='<i class="bi bi-x-lg" ></i>'
        checked.innerHTML='<input class="form-check-input " type="radio" name="radioNoLabel" id="radioss" value="" aria-label="...">'
        let radioss = document.getElementById('radioss');
        ul.appendChild(li);
        li.appendChild(btnSupprimer);
        li.appendChild(checked);


 
      count++;
      document.getElementById('items').innerHTML = count+' '+'items left';

       
        
        checked.addEventListener('click', ()=>{
            li.classList.add('textebarre');
           
        })
    
    
    
    
    
    })


    function del(element){
        element.remove();
        count--
        document.getElementById('items').innerHTML = count+' '+'items left';

    }
    

    //mode dark
    
    modeDark.addEventListener('click',function(){
        this.classList.toggle('bi-moon');
           if(this.classList.toggle('bi-moon-fill')){

            body.style.background='#222937 ';
            body.style.transition='1s';
            background.style.backgroundImage='url("4.jpg")';
            background.style.transition='1s';
            body.style.color='white';
            inputs.style.background='#222937'
            inputs.style.color='white';
            radioNoLabel1.style.background='#222937';
            counter.style.background='#222937';
            
            container1.style.color='white';
            span1.style.background='#222937';
            
            
            

           }else{
            body.style.background='white';
            body.style.transition='1s';
            background.style.backgroundImage='url("2.jpg")';
            background.style.transition='1s';
            body.style.color='black';
            inputs.style.background='white'
            inputs.style.color='black'
            radioNoLabel1.style.background='white'
            counter.style.background='white'
            counter.style.border='1px solid #CFCFD1';
            container1.style.color='#808B96'
            span1.style.background='white'

           }
       
    })
    




