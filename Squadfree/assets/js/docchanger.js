function changeCSS(cssFile, cssLinkIndex) {
    // Get the button element by its ID
const boton = document.getElementById('boton');
const boton2 = document.getElementById('boton2')
    
var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

var newlink = document.createElement("link");
newlink.setAttribute("rel", "stylesheet");
newlink.setAttribute("type", "text/css");
newlink.setAttribute("href", cssFile);

document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);

}
    

function enableStylesheet () {
    
    changeCSS("assets/css/doc.css",'css')
    boton2.style.backgroundColor = '#17A63B';
    boton.style.backgroundColor = '#F2F2F2';

  }
  
  function colorblind () {changeCSS("assets/css/opos.css",'css');
    boton.style.backgroundColor = '#17A63B';
    boton2.style.backgroundColor = '#F2F2F2';
    

  }
