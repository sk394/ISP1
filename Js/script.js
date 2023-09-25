"use strict";

const myName=document.querySelector(".nameBtn");
myName.addEventListener("click", ()=>{
    myName.innerHTML = "Suman Khadka"; 
    myName.style.backgroundColor = "navy";
    myName.style.borderRadius = "20%";
});

// Page cursors
document.body.addEventListener("mousemove", function (e) {
    document.getElementById("cursor").style.left = e.clientX + "px";
    document.getElementById("cursor").style.top = e.clientY + "px";
    document.getElementById("cursor2").style.left = e.clientX + "px";
    document.getElementById("cursor2").style.top = e.clientY + "px";
    document.getElementById("cursor3").style.left = e.clientX + "px";
    document.getElementById("cursor3").style.top = e.clientY + "px";
   
  });
  

  
  
  // Scroll back to top
document.addEventListener("DOMContentLoaded", function () {
    var offset = 300;
    var duration = 400;
    window.addEventListener('scroll', function () {
      if (window.scrollY > offset) {
        document.querySelector('.scroll-to-top').classList.add('active-arrow');
      } else {
        document.querySelector('.scroll-to-top').classList.remove('active-arrow');
      }
    });
  
    document.querySelector('.scroll-to-top').addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });