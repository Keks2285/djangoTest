

const inputPass = document.getElementById('password');
const inputUsername = document.getElementById('FIO');
const iconPass = document.getElementById('pass-icon');
const modal = document.getElementById('myModal');
const closeModalButton = document.getElementById('close-modal');
const loginButton = document.getElementById('vhodBtn');

iconPass.addEventListener('click', () => {
    
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password');
    }
});

//надо подумать над этим стоит ли вообще так делать
loginButton.addEventListener('click',async () => {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let PASS =getSHA256Hash(document.getElementById('password').value);
    let FIO = document.getElementById('FIO').value;


    if (FIO === '' || document.getElementById('password').value === '') {
        modal.style.display = 'block';
    } else {
       // window.location.href = '/';
    }

    alert(JSON.stringify({
        password: PASS,
        fio: FIO,
    }));

    // //
    const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
            password: PASS,
            fio: FIO,
        }) // Ваши данные для отправки
      })
      //alert(response.status);
      if (response.status=200){
        window.location.href = '/';
      }
      
        // const username = inputUsername.value.trim();
        // const password = inputPass.value.trim();

        // if (username === '' || password === '') {
        //     modal.style.display = 'block';
        // } else {
        //     window.location.href = 'glav_techn.html';
        // }
});




closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

function getSHA256Hash(str) { 
    const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
    shaObj.update(str);
    const hash = shaObj.getHash("HEX");
return hash;
} 


// .onsubmit = async function(event) { 
//     alert();
// };