function add() {
  function itemOne() {
    return "hello";
  }
  function itemTwo() {
    return "world";
  }
  return itemOne() + itemTwo();
}
//console.log(add()) // helloworld

function add() {
  function itemOne() {
    return "hello";
  }
  function itemTwo() {
    return "world";
  }
  return "hello world";
}
console.log(add())