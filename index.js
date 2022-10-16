
const name = document.getElementById('signname');
const email = document.getElementById('signemail');
const pwd = document.getElementById('signpass');
const mob = document.getElementById('signmob');
let nameValid = false;
let emailValid = false;
let pwdValid = false;
let mobValid = false;


// Sign Up form

name.addEventListener('blur', ()=>{
     let nameRegEx = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;   // this must start with A-Za-z and end with 2-20 character and in middle has 0-9
     if(nameRegEx.test(name.value)){
          name.classList.remove('is-invalid');
          nameValid = true;
     }else{
          nameValid = false;
          name.classList.add('is-invalid')
     }
})

email.addEventListener('blur', ()=>{
     let emailRegEx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; // 
     if(emailRegEx.test(email.value)){
          email.classList.remove('is-invalid');
          emailValid = true;
     }else{
          emailValid = false;
          email.classList.add('is-invalid');
     }
})
pwd.addEventListener('blur', ()=>{
     let pwdRegEx = /^([_\-\@\$\%\^\&\*\!\~\#\?\.0-9a-zA-Z]){8,16}$/; //
     if(pwdRegEx.test(pwd.value)){
          pwd.classList.remove('is-invalid');
          pwdValid = true;
     }else{
          pwdValid = false;
          pwd.classList.add('is-invalid');
     }
})
mob.addEventListener('blur', ()=>{
     let mobRegEx = /^[6789]([0-9]){9}$/; // no. must start with 6,7,8,9 and have 10 digit
     if(mobRegEx.test(mob.value)){
          mob.classList.remove('is-invalid');
          mobValid = true;
     }else{
          mobValid = false;
          mob.classList.add('is-invalid');
     }
})

let signBtn = document.getElementById('signBtn');
signBtn.addEventListener('click', ()=>{
     let success = document.getElementById('success');
     let fail = document.getElementById('fail');
     if(nameValid && emailValid && mobValid && pwdValid){
          success.style.display = 'block'
          fail.style.display = 'none'
          console.log(name.value, email.value, pwd.value, mob.value)
     }else{
          fail.style.display = 'block';
          success.style.display = 'none'
     }
     
})