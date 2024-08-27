function openLogin() {
         document.getElementById("loginModal").style.display = "flex";
         document.getElementById("home").style.filter = "blur(5px)";
     }
     
     function closeLogin() {
         document.getElementById("loginModal").style.display = "none";
         document.getElementById("home").style.filter = "none";
     }
     