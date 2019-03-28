// start with the menu

var nav = document.getElementById('hamburger'),
    menu = document.getElementsByTagName('menu')[0];


nav.onmouseover = function(){
    nav.classList.add('expand');
}
nav.onmouseout = function(){

    nav.classList.remove('expand');
}

nav.onclick = function(){
    menu.classList.add('show');
    console.log('You done clicked it.');
    nav.classList.add('collapse');
    nav.classList.remove('expand');
    nav.id = 'close'; 
    setTimeout(function(){ nav.classList.add('close');}, 500);
    
    var closeIcon = document.getElementById('close');
    
    
closeIcon.onclick = function(){
    menu.classList.remove('show');
    setTimeout(function(){ nav.classList.remove('close', 'collapse');nav.id = 'hamburger';}, 500);
}

}

// logo hovering

var logo = document.getElementById('logo');

logo.onmouseover = function(){
    logo.classList.add('ftime');
}
logo.onmouseout = function(){

    logo.classList.remove('ftime');
}