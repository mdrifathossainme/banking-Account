document.getElementById('submitBtn').addEventListener('click',function(){
    const email= document.getElementById('emailForm');
    const userEmail= email.value;
    const password= document.getElementById('passwordForm');
    const userPassowrd = password.value;
    if(userEmail=='md@gmail.com' && userPassowrd == '7432'){
        window.location.href = 'banking.html';
    }
})