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
      M.toast({html: 'Заполните все поля!'});
    }
    else if (result == 1) {
      M.toast({html: 'Успех! Можно войти.'});
      closeModal();
    }
    else {
      M.toast({html: 'Ошибка! Повторите регизтрацию позже.'});
    }
  }
};

document.querySelector('#login-submit').onclick = function (event) {
  event.preventDefault();
  //console.log('work');
  let pass = document.querySelector('#login-pass').value;
  let email = document.querySelector('#login-email').value;
  let data = {
    "pass" : pass,
    "email" : email,
  };
  ajax('core/login.php', "POST", login, data);

  function login(result) {
    console.log(result);
    if (result == 2) {
      M.toast({html: 'Заполните все поля!'});
    }
    else if (result == 0) {
      M.toast({html: 'User not found.'});
    }
    else {
      console.log(result);
      result = JSON.parse(result);
      var d = new Date();
      d.setTime(d.getTime() + (60 * 1000));
      var expires = d.toUTCString();
      document.cookie = `email=${result.email}; expires=${expires}; path=/`;
      location.href = "cabinet.php";
    }
  }
};
