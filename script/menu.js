$(window).scroll(function(){
    if($(window).scrollTop() <= 250){
      //  console.log("if");
        
      $('#toto').addClass('slidin');
    } else {
       // console.log("else");
        
      $('#toto').removeClass('slidin');
    }
});


  var menu = document.getElementById("menuToggle").getElementsByTagName('a');
  console.log(menu);

  for (i = 0; i < menu.length; i++)
  {
    console.log(menu[i]);
    var spans = document.getElementById('menuToggle');
      var myspans = spans.getElementsByTagName('span');
      console.log(myspans[2]);

/***** LE TOGGLE
 * 
 * 
 * 
 */
var barres = document.getElementById("burger");
 
var switcher = 0;

barres.onclick = function() {
  console.log("yo");
  
  if (switcher == 0) {
    myspans[0].style = "transform: rotate(330deg) scale(0.5, 1) translate(-10px, 8px); background: #FFFFFF"
    myspans[1].style = "transform: rotate(-360deg) scale(0.9, 1) translate(-0.5px, 0px);background: #FFFFFF"
    myspans[2].style = "transform: rotate(330deg) scale(0.5, 1) translate(-13px, 6px);background: #FFFFFF;     transform: rotate(-330deg) scale(0.5, 1) translate(-10px, -7px);"
    document.getElementById("menu").style = "transform: translate(0%, 0);";
    switcher = 1;    
  }
  else {
      myspans[0].style = "transform: none; background: #000000"
      myspans[1].style = "transform: none; background: #000000"
      myspans[2].style = "transform: none; background: #000000"     
      document.getElementById("menu").style = "transform: translate(-100%, 0);";
      switcher = 0;
  }
}

    /***** LE TOGGLE
 * 
 * 
 * 
 */


    menu[i].onclick = function() {
      console.log("xd");

      //document.getElementById("menu").style.transform = "translate(-100%, 0)";
      document.getElementById("menu").style = "transform: translate(-100%, 0);";
  switcher = 1;
      myspans[0].style = "transform: none; background: #000000";
      myspans[1].style = "transform: none; background: #000000";
      myspans[2].style = "transform: none; background: #000000";
      switcher = 0;

        
    }
  }
  

  


document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

        $('html, body').animate({ scrollTop:$(document.querySelector(this.getAttribute('href'))).offset().top}, 300);

   // document.querySelector(this.getAttribute('href')).scrollIntoView({ block: 'start',  behavior: 'auto' });
  });
});
