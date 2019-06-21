function swap_mod() {
    if (document.getElementById('darkornot').checked || document.getElementById('darkornot_2').checked)
    {
        document.getElementById("style_dl").href="./style/style_dark.css"; 
        document.getElementById("menu").style = "transform: translate(-100%, 0);";
  switcher = 1;
      myspans[0].style = "transform: none; background: #FFFFFF";
      myspans[1].style = "transform: none; background: #FFFFFF";
      myspans[2].style = "transform: none; background: #FFFFFF";
      switcher = 0;
        console.log("checked");
    }
    else {
        document.getElementById("style_dl").href="./style/style.css"; 
        document.getElementById("menu").style = "transform: translate(-100%, 0);";
  switcher = 1;
      myspans[0].style = "transform: none; background: #000000";
      myspans[1].style = "transform: none; background: #000000";
      myspans[2].style = "transform: none; background: #000000";
      switcher = 0;
        console.log("not checked");
    }
}