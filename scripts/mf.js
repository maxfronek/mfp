// start with the menu

var nav = document.querySelector('#hamburger'),
    menu = document.getElementsByTagName('menu')[0],
    logo = document.getElementById('logo'),
    header = document.querySelector('header');


nav.onmouseover = function(){
    nav.classList.add('expand');
}
nav.onmouseout = function(){

    nav.classList.remove('expand');
}



var showMenu = function(){
    menu.classList.toggle('show');
    header.classList.toggle('z-plus');
    console.log('You done clicked it.');
    nav.classList.toggle('collapse');
    nav.classList.toggle('expand');
    logo.classList.toggle('fixed');
    
    setTimeout(function(){ nav.classList.toggle('close');}, 500);
    
    if (document.querySelector("#about").classList.contains("show")) {   
    setTimeout(function() {
        aboutContent.classList.remove('show');
        aboutAlt.classList.remove('extra');
    }, 250);
    } else {
    document.querySelector('body').classList.toggle('lock');
    }; 
};

nav.addEventListener('click', showMenu, false);


// show / hide menu on scroll (mobile only)

let scrollPos = 0;

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }    
  scrollPos = windowY;
  if (scrollPos < 100) { 
     // at top of window 
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  }      
};

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));



// logo hovering

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
    aboutAlt.classList.toggle('extra');
    
if (document.querySelector("menu").classList.contains("show")) {
    nav.classList.toggle('collapse');
    nav.classList.toggle('close');
    setTimeout(function() {
        menu.classList.remove('show');
        header.classList.remove('z-plus');
    }, 500);
    } else {  
    document.querySelector('body').classList.toggle('lock');
    };
};
var closeInfo = document.getElementById('close-info'),
    hideAbout = function() {
    logo.classList.remove('fixed');    
    aboutContent.classList.remove('show');
    aboutAlt.classList.toggle('extra');
    document.querySelector('body').classList.remove('lock');
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

// enlarge images on posts 
/*
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

*/

var menuItem = menu.getElementsByClassName("menu-item"),
    menuInfo = function() {
        var menuAnchor = this.querySelector('a'),
            menuTitle = menuAnchor.innerHTML,
            menuImage = this.querySelector('div');
    // console.log("Menu Item " + menuTitle + " hovered")    
    menuImage.classList.toggle('show');
};



for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('mouseover', menuInfo, false);
    menuItem[i].addEventListener('mouseleave', menuInfo, false);
};



sal({
    threshold: .7,
});



new LuminousGallery(
        document.querySelectorAll(".expand"),
        {
          arrowNavigation: true
        },
        {
          caption: function(trigger) {
            return trigger.querySelector("img").getAttribute("alt");
          }
        }
      );

