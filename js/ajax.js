// XMLHttpRequest
//let xhttp = new XMLHttpRequest();
//xhttp.open('post','back.php', true);
//xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xhttp.send('name=vasya');

/*xhttp.onreadystatechange = function () {
  if ((this.readyState == 4) && (this.status == 200)) {
    console.log(this);
  }
};*/

function ajax(ulr, method, functionName, dataArray) {
  let xhttp = new XMLHttpRequest();
  xhttp.open(method,ulr, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(requestData(dataArray));

  xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) && (this.status == 200)) {
      functionName(this.response);
    }
  };
}

function requestData(dataArr) {
  let out = '';
  for (let key in dataArr) {
    out += `${key}=${dataArr[key]}&`;
  }
  console.log(out);
  return out;
}
