// function hd() {
//   console.log("01中的hd方法");
// }
// function show() {
//   console.log("01中的show方法");
// }

// (function(window) {
//   function hd() {
//     console.log("01中的hd方法");
//   }
//   function show() {
//     console.log("01中的show方法");
//   }
//   window.js1 = { hd, show };
// })(window);

{
  function hd() {
    console.log("01中的hd方法");
  }
  function show() {
    console.log("01中的show方法");
  }
  window.js1 = { hd, show };
}
