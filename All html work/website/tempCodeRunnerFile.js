function hello() {
  var day = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
  var d = new Date();
  var D = d.getDay();
  var D1 = d.getDate();
  var D2 = d.getMonth();
  var D3 = d.getFullYear();
  console.log(D1 + ":" + D2 + ":" + D3);
}
