document.querySelector('#signup-submit').onclick = function (event) {
  event.preventDefault();
  //console.log('work');
  let name = document.querySelector('#signup-name').value;
  let pass = document.querySelector('#signup-pass').value;
  let email = document.querySelector('#signup-email').value;
  let birthday = document.querySelector('#signup-birthday').value;
  let sex = document.querySelectorAll('.sex');
  for (let i = 0; i < sex.length; i++) {
    //console.log(sex[i].checked);
    if (sex[i].checked) {
      sex = sex[i].value;
      break;
    }
  }
  //console.log(sex);
  let data = {
    "name" : name,
    "pass" : pass,
    "email" : email,
    "birthday" : birthday,
    "sex" : sex,
  }
  ajax('core/signup.php', "POST", signup, data);

  function signup(result) {
    console.log(result);
    if (result == 2) {
      alert("Заполните все поля!");
    }
    else if (result == 1) {
      alert("Успех! Можно войти.");
    }
    else {
      alert('Ошибка! Повторите регизтрацию позже.');
    }
  }
};

document.querySelector('#login-submit').onclick = function (event) {
  event.preventDefault();
  //console.log('work');
  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;
  let data = {
    "email" : email,
    "pass" : pass,
  };
  ajax('core/login.php', "POST", login, data);

  function login(result) {
    console.log(result);
    if (result == 2) {
      alert("Заполните все поля!");
    }
    else if (result == 0) {
      alert("User not found.");
    }
    else {
      console.log(result);
    }
  }
};
