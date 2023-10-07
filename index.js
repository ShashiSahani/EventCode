// script.js
document.addEventListener("DOMContentLoaded", function () {
  //getting the  element id 'insert'
  const insert = document.getElementById("insert");
  //listen for tkeydown event on the window
  window.addEventListener("keydown", (e) => {
    //update the html content based on the key event
    insert.innerHTML = `
           <div class="container">
           
           <div class="key">
           ${e.key === " " ? "Space" : e.key}
           <small>event key</small>
       </div>
       <div class="key">
           ${e.keyCode}
           <small>event keyCode</small>
       </div>
       <div class="key">
           ${e.code}
           <small>event keyCode</small>
       </div>
           </div>
        `;
  });
});
