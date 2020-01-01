//function ajax(ulr, method, functionName, dataArray) {
// POST -> date = '2019-12-25'
//let date = {"date" : "2019-12-25"};

document.querySelector('button').onclick = function() {
  let input = document.querySelector('#int-date');
  let date = {"date" : input.value};
  ajax('datetime.php', 'POST', showTime, date);
};

//ajax('datetime.php', 'POST', showTime, date);

function showTime(data) {
  data = JSON.parse(data);
  console.log(data);
  alert(data.F);
}
