
let height1=document.querySelector('#height')
let weight1=document.querySelector('#weight')
let result1=document.getElementById('result')
let height,weight;
let submit=document.getElementById("submission");
function showResult(BMI){
    let result=document.createElement('p');

     BMI===-1?
        result.innerHTML="<b>Please Enter a valid number greater than zero</b>"
     :result.innerHTML=`Result : ${BMI}`
    if(BMI<18.6){
        result.innerHTML= result.innerHTML+"<br><b>Under Weight</b>"
    }
    else if(BMI>=18.6 && BMI<24.9){
        result.innerHTML= result.innerHTML+"<br><b>Normal Range</b>"
    }
    else{
        result.innerHTML= result.innerHTML+"<br><b>Over  Weight</b>"
    }
    result1.style.display = "block";
    result1.append(result);

} 

function calculator(){
    height=parseFloat(document.querySelector('#height').value);
    weight=parseFloat(document.querySelector('#weight').value);
  if(isNaN(height) || height<=0 || isNaN(weight) || weight<=0){
    showResult(-1);
    
    return;
  }
    
        let BMI=(weight/((height*height)/10000)).toFixed(2);
        showResult(BMI);
    }
submit.addEventListener('click',function(e){ 
    e.preventDefault();
    calculator();
});