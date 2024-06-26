
var exchange = document.querySelector('.exchange');
var result= [];
var exchangeAmount=" ";
 exchange.onsubmit = function getOption(e){
    document.querySelector(".result").textContent= "";
    e.preventDefault();
    amount = document.querySelector('input').value;
   
    selectElement = document.querySelector('.test');
 output = selectElement.value;
 result=[];
 if(output == "Dollar"){
    result.push(amount / 3.5)
}else if(output == "Dinar"){
    result.push(amount / 5.28) 
}else{
    result.push(amount ) 
};

document.querySelector(".result").textContent= result;



};



