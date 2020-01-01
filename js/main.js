document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let instances = M.Datepicker.init(elems, {
    "format" : "yyyy-mm-dd"
  });
});

document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
  element.onclick = closeModal;
});

function showModal() {
  let modalID = this.dataset.modal;
  document.querySelector(modalID).classList.remove('hide');
  document.onkeydown = function (event) {
    //close window 'Esc'
    if (event.keyCode == 27) {
      closeModal();
    }
  };
}

function closeModal() {
  document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.classList.add('hide');
  });
  document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function (event) {
  event.stopPropagation();
};

document.querySelector('#sing-up .modal-project').onclick = function (event) {
  event.stopPropagation();
};

document.querySelector('.read-rules').onclick = function () {
  console.log('work');
  document.querySelector('.form-slider').style.marginLeft = '-345px';
};

document.querySelectorAll('.read-rules-back').forEach(function (element) {
  element.onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0';
  }
});

document.querySelector('#agree-rules').onchange = function () {
  if (this.checked) {
    document.querySelector('#signup-submit').classList.remove('disabled');
  }
  else {
    document.querySelector('#signup-submit').classList.add('disabled');
  }
};
