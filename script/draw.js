$(document).ready(function () {
    var path = document.querySelectorAll('path'), 
    percentScroll;

$(path).each(function(){
this.style.strokeDasharray = this.getTotalLength();
this.style.strokeDashoffset = this.getTotalLength();
});

window.onscroll = function(){
percentScroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)

$(path).each(function(){
this.style.strokeDashoffset = Math.floor(this.getTotalLength() * (1 - percentScroll));
});
};
});


