let number = document.getElementById("number");
let decrement = document.querySelector("#decrease");
let increment = document.querySelector("#increase");
let clear = document.querySelector('#clear');
let addOn = document.querySelector('.count');
let para = document.createElement('p');
    para.innerHTML = 'Error : Cannot go below 0';
    para.style.color = "red";
    para.style.fontSize = '25px';

function error(){
    addOn.appendChild(para);
}
increment.addEventListener('click', (e) => {
    if(addOn.childElementCount == 2){
        addOn.removeChild(para);
    }
    let count = Number(number.innerHTML);
    number.innerHTML = count + 1;
    
});

decrement.addEventListener('click', (e) => {
    let count = Number(number.innerHTML);
    if(count != 0){
        number.innerHTML = count - 1;
    }
    else{
        error();
    }
})

clear.addEventListener('click' , () => {
    number.innerHTML = 0;
})

