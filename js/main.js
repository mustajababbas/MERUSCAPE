


function openNav() {
    document.getElementById("mySidenav").style.width = "540px";
    document.getElementById("main").style.marginLeft = "540px";
    document.getElementById("menu-heading").style.marginLeft = "640px";

    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("main").style.marginLeft = "300px";
     }

  }
  

  


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("menu-heading").style.marginLeft = "380px";

    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.getElementById("menu-heading").style.marginLeft = "0px";
     }

   
  }

//PORTFOLIO PAGE LIST GRID CHANGER
                        
  function grid() {
  document.getElementById("list").style.display = "inline";
  document.getElementById("grid").style.display = "none";
  document.getElementById("section-list").style.display = "block";
  document.getElementById("section-grid").style.display = "none";
  }

  function list() {
  document.getElementById("list").style.display = "none";
  document.getElementById("grid").style.display = "inline";
  document.getElementById("section-list").style.display = "none";
  document.getElementById("section-grid").style.display = "block";
  }





  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
