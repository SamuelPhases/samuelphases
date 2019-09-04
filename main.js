

// NAME INPUT
const okName = document.getElementById('ok-name');
const foobar = document.getElementById('ok');
const nameBox = document.getElementById('name');
nameBox.addEventListener("keypress", nameIt)
function nameIt() {
  if(nameBox.value.length < 4){
    okName.style.opacity = 1;
    foobar.style.opacity = 0;
  }
  else {
    okName.style.opacity = 0;
    foobar.style.opacity = 1;
  }
}


// EMAIL INPUT

const barfoo = document.getElementById('ok-email');

const emailBox = document.getElementById('email');

const wrongEmail = document.getElementById('emailwrong');

emailBox.addEventListener("keypress", emailIt)
function emailIt() {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailBox.value)) {
    console.log('okkkk');
    wrongEmail.style.opacity = 0;
    barfoo.style.opacity = 1;
  } 
  else {
    wrongEmail.style.opacity = 1;
    barfoo.style.opacity = 0;
  }
}


// MESSAGE INPUT

const okMessage = document.getElementById('okmessage');

const textBox = document.getElementById('textnotcomplete');

const message = document.getElementById('message');

message.addEventListener("keypress", messageIt)
function messageIt() {
  if (message.value.length < 20) {
    textBox.style.opacity = 1;
    okMessage.style.opacity = 0;
  }
  else {
    textBox.style.opacity = 0;
    okMessage.style.opacity = 1;
  }
}
