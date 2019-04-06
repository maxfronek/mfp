// start with the menu

var nav = document.querySelector('#hamburger'),
    menu = document.getElementsByTagName('menu')[0];


nav.onmouseover = function(){
    nav.classList.add('expand');
}
nav.onmouseout = function(){

    nav.classList.remove('expand');
}

nav.onclick = function(){
    menu.classList.toggle('show');
    console.log('You done clicked it.');
    nav.classList.toggle('collapse');
    nav.classList.toggle('expand');
    setTimeout(function(){ nav.classList.toggle('close');}, 500);
}

// logo hovering

var logo = document.getElementById('logo');

logo.onmouseover = function(){
    logo.classList.add('ftime');
}
logo.onmouseout = function(){

    logo.classList.remove('ftime');
}

var aboutContent = document.getElementById('about'),
    aboutAlt = document.getElementById('me');

var showAbout = function() {
    aboutContent.classList.toggle('show');
    aboutAlt.classList.toggle('extra');};
var closeInfo = document.getElementById('close-info'),
    hideAbout = function() {
    aboutContent.classList.remove('show');
    aboutAlt.classList.toggle('extra');
    };

logo.addEventListener('click', showAbout, false);
aboutAlt.addEventListener('click', showAbout, false);
closeInfo.addEventListener('click', hideAbout, false);





// homepage gallery hover title

var galItem = document.getElementsByClassName("image");

var showItemContent = function(){
    var itemContent = this.childNodes[3];
    itemContent.classList.add('show');
}

var hideItemContent = function(){
    var itemContent = this.childNodes[3];
    itemContent.classList.remove('show');
}



for (var i = 0; i < galItem.length; i++) {
    galItem[i].addEventListener('mouseover', showItemContent, false);
    galItem[i].addEventListener('mouseleave', hideItemContent, false);
}


/*


var link = document.getElementsByClassName("list-link"),
    listItem = document.getElementsByClassName("list-item"),
    photo = document.getElementsByClassName("list-image");
    
    reveal = function() {
        photo[i].classList.toggle('show');
      //  alert('hovered over ' + photo);
};

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', reveal, false);
    link[i].addEventListener('mouseout', reveal, false);
    // photo[i].addEventListener('mouseover', reveal, false);
} 
*/

// photo post niceties
/*
var photo = document.querySelector('.gallery-item'),
    main = document.querySelector('main');

photo.onclick = function(){
    this.classList.toggle('embiggen');
   // setTimeout(function(){main.classList.toggle('embiggen');}, 300;);
    console.log('A Noble Spirit, Indeed');
}*/

var classname = document.getElementsByClassName("gallery-item"),
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 



var embiggen = function() {
    this.classList.toggle('embiggen');
    this.sizes = "200vw"
    var parent = this.parentNode,
        caption = parent.childNodes[3];
    parent.classList.toggle('embiggen');
    caption.classList.toggle('reveal');
    // setTimeout(function(){parent.scrollIntoView({behavior: "smooth", block: "end"});}, 550);

    //this.style.height = h + "px";
   // this.style.width = w + "px";
  //  alert("width:" + w + "px, height:" + h + "px");
};



for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', embiggen, false);
};


sal({
    threshold: .7,
});