$(document).ready(function () {


var path = document.querySelectorAll('path'), 
		percentScroll;

$(path).each(function(){
  this.style.strokeDasharray = this.getTotalLength();
  this.style.strokeDashoffset = this.getTotalLength();
});

window.onscroll = function(){
  percentScroll = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) / 13;
	console.log(percentScroll);
  $(path).each(function(){
    this.style.strokeDashoffset = Math.floor(this.getTotalLength() * (1 - percentScroll));
  });
};

});


