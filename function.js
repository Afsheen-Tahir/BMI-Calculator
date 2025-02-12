let form=document.querySelector('form')
let height1=document.querySelector('#height')
let weight1=document.querySelector('#weight')
let result=document.getElementById('result')
let list=document.getElementById('list')
let height,weight;
let condition=true;

function showResult(BMI){
    
     if(BMI===-1){
        result.innerHTML="<b>Please Enter a valid number greater than zero</b>"
     }
     else{
         result.innerHTML=`Result : ${BMI}`
    if(BMI<18.6){
        result.innerHTML= result.innerHTML+"<br><b>Under Weight</b>"
    }
    else if(BMI>=18.6 && BMI<24.9){
        result.innerHTML= result.innerHTML+"<br><b>Normal Range</b>"
    }
    else{
        result.innerHTML= result.innerHTML+"<br><b>Over  Weight</b>"
    }
}  
}

function calculator(){
    height=parseFloat(document.querySelector('#height').value);
    weight=parseFloat(document.querySelector('#weight').value);
  if(isNaN(height) || height<=0 || isNaN(weight) || weight<=0){
    showResult(-1);
    condition=false;
  }
    if(condition){
        let BMI=(weight/((height*height)/10000)).toFixed(2);
        showResult(BMI)
        }
    }
form.addEventListener('submit',function(e){ 
    e.preventDefault();
    calculator();
 })