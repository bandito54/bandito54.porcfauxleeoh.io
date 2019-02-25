function swap_mod() {
    if (document.getElementById('darkornot').checked)
    {
        document.getElementById("style_dl").href="./style/style_dark.css"; 
        console.log("checked");
    }
    else {
        document.getElementById("style_dl").href="./style/style.css"; 
        console.log("not checked");
    }
}