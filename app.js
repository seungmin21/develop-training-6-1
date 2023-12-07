function container() {
  function itemOne() {
    return "<h1>";
  }
  function itemTwo() {
    return "Hello";
  }
  function itemThree() {
    return "</h1>";
  }
  return itemOne() + itemTwo() + itemThree();
}

console.log(container());