let counter = document.querySelectorAll('.button');
let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let num = document.querySelectorAll('.num');
let cart = document.querySelector('.cart');
let list = document.querySelectorAll('li');
let names = document.querySelectorAll('.name');
let price = document.querySelectorAll('.price');
let content = document.querySelector('.content');
let noCart = document.querySelector('.content h3');
let total = document.querySelectorAll('.total h2');
let amount = 0;
//todo --------- For Counter ---------
for(let i = 0; i < counter.length; i++){
    minus[i].addEventListener('click',() =>{
        if(num[i].innerText != 0){
            num[i].innerText--;
        }
        else{
            num[i].innerText = 0;
        }
    });
    plus[i].addEventListener('click',() =>{
        num[i].innerText++;
    });
}

//todo --------- Cart Section ---------
// console.log(names, price, num);
function createCard(idx, names, price, num){
    let newEle = document.createElement('div');
    newEle.classList.add('prods');
    newEle.innerHTML=
    `
        <span>${names[idx].innerText}</span>
        <span class = numb> ${num[idx].innerText} x ${price[idx].innerText}</span>
    `
    if(idx == 0){
        newEle.classList.add('first');
    }
    else if(idx == 1){
        newEle.classList.add('second');
    }
    else if(idx == 2){
        newEle.classList.add('third');
    }
    return newEle;
    // console.log(newEle);
}

for(let i = 0; i < list.length; i++){

    //todo --------- For Increament ---------
    plus[i].addEventListener('click',() =>{
        noCart.style.display = 'none';
        if(num[i].innerText == 1){
            content.appendChild(createCard(i, names, price, num))
        }
        else{
            if(i == 0){
                let increase = content.querySelector('.first .numb');
                increase.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
            else if(i == 1){
                let increase = content.querySelector('.second .numb');
                increase.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
            else{
                let increase = content.querySelector('.third .numb');
                increase.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
        }
        amount += parseInt(price[i].innerText);
        total[1].innerText = amount;
    });

    //todo --------- For Decreament ---------
    minus[i].addEventListener('click',() =>{
        if(num[i].innerText == 0){
            if(i == 0 && content.querySelector('.first')){
                let removeEle = content.querySelector('.first');
                content.removeChild(removeEle);
            }
            else if(i == 1 && content.querySelector('.second')){
                let removeEle = content.querySelector('.second');
                content.removeChild(removeEle);
            }
            else if(i == 2 && content.querySelector('.third')){
                let removeEle = content.querySelector('.third');
                content.removeChild(removeEle);
            }
        }
        if(!content.querySelector('.prods')){
            noCart.style.display = 'block';
        }
        else{
            if(i == 0){
                let dec = content.querySelector('.first .numb');
                dec.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
            else if(i == 1){
                let dec = content.querySelector('.second .numb');
                dec.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
            else{
                let dec = content.querySelector('.third .numb');
                dec.innerText =  `${num[i].innerText} x ${price[i].innerText}`
            }
        }
        if(total[1].innerText > 0){
            amount -= parseInt(price[i].innerText);
            total[1].innerText = amount;
        }
        else{
            total[1].innerText = '0.00';
        }
    });   
}