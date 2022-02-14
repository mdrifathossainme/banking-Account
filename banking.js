
function depositeFunction(deposite){
    const InputValue= document.getElementById(deposite);
    const Input =InputValue.value;
    const InputFloat= parseFloat(Input);
    InputValue.value= '';
    return InputFloat;
}

function depositesecendfunction(secendpara, InputFloat){
    const depositeTotal= document.getElementById(secendpara);
    const depositeMoneyValue= depositeTotal.innerText;
    const depositeTotalFolat= parseFloat(depositeMoneyValue);

    const depositeAll=InputFloat+depositeTotalFolat;
    depositeTotal.innerText=depositeAll;
}



function updateBalance(InputFloat ,isadd){
    const totalAllMoney =document.getElementById('balanceMoney');
    // const totalAllMoneyValue= totalAllMoney.innerText;
    // const totalAllMoneyConvar= parseFloat(totalAllMoneyValue);
    const totalAllMoneyConvar =curentValue();
    if(isadd== true){
        totalAllMoney.innerText=totalAllMoneyConvar+InputFloat;
    }
    else{
        totalAllMoney.innerText=totalAllMoneyConvar-InputFloat;
        
    }
};

function curentValue(){
    const totalAllMoney =document.getElementById('balanceMoney');
    const totalAllMoneyValue= totalAllMoney.innerText;
    const totalAllMoneyConvar= parseFloat(totalAllMoneyValue);
    return totalAllMoneyConvar;
}
document.getElementById('depositeBtn').addEventListener('click',function(){

    const  depositeInputFloat =depositeFunction('depositeForm');
    if(depositeInputFloat>0){
        depositesecendfunction('depositeMoney', depositeInputFloat);
        updateBalance(depositeInputFloat , true);
    }
    else{
        
    }
    


    // const depositeInputValue= document.getElementById('depositeForm');
    // const depositeInput =depositeInputValue.value;
    // const depositeInputFloat= parseFloat(depositeInput);

    // console.log(depositeInputFloat);
   


    // const depositeTotal= document.getElementById('depositeMoney');
    // const depositeMoneyValue= depositeTotal.innerText;
    // const depositeTotalFolat= parseFloat(depositeMoneyValue);

    // const depositeAll= depositeInputFloat+depositeTotalFolat;
    // depositeTotal.innerText=depositeAll;

    // depositeInputValue.value= '';

    // const totalAllMoney =document.getElementById('balanceMoney');
    // const totalAllMoneyValue= totalAllMoney.innerText;
    // const totalAllMoneyConvar= parseFloat(totalAllMoneyValue);
    // totalAllMoney.innerText=totalAllMoneyConvar+depositeInputFloat;

   



});
document.getElementById('withdrawBtn').addEventListener('click',function(){
    
    const  withdrawInputFloat =depositeFunction('withdrawForm');
    const previusCurrentValue =curentValue();
    if(withdrawInputFloat >0 && withdrawInputFloat <= previusCurrentValue ){
        depositesecendfunction('withdrawMoney', withdrawInputFloat)
        updateBalance (withdrawInputFloat, false);
    };


    // const withdrawInputValue= document.getElementById('withdrawForm');
    // const withdrawInput =withdrawInputValue.value;
    // const withdrawInputFloat= parseFloat(withdrawInput);

    // const withdrawTotal= document.getElementById('withdrawMoney');
    // const withdrawMoneyValue= withdrawTotal.innerText;
    // const withdrawTotalFolat= parseFloat(withdrawMoneyValue);

    // const withdrawAll= withdrawInputFloat+withdrawTotalFolat;
    // withdrawTotal.innerText=withdrawAll;

    // withdrawInputValue.value= '';

    // const totalMoney = document.getElementById('balanceMoney');
    // const allTotalMoney = totalMoney.innerText;
    // const moneyAll= parseFloat(allTotalMoney);
    // totalMoney.innerText= moneyAll - withdrawInputFloat;


});
