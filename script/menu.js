$(window).scroll(function(){
    if($(window).scrollTop() <= 250){
      //  console.log("if");
        
      $('#toto').addClass('slidin');
    } else {
       // console.log("else");
        
      $('#toto').removeClass('slidin');
    }
});


document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

        $('html, body').animate({ scrollTop:$(document.querySelector(this.getAttribute('href'))).offset().top}, 300);

   // document.querySelector(this.getAttribute('href')).scrollIntoView({ block: 'start',  behavior: 'auto' });
  });
});
