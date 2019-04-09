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

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});