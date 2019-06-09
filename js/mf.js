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

var scollMonitor = function() {console.log(pageYOffset + 'px')};

let scrollPos = 0;

window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});

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


var classname = document.getElementsByClassName("gallery-item"),
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 


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


// lazyloading code for videos
    
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  };

/*

    Macy({ 
        container: "#masonry",
        waitForImages: false,
        columns: 2,
    breakAt: {
        550: {
          columns: 1
    }
  }
    });

console.log('masonry has been run')

*/
// instantiate animation on scroll

sal({
    threshold: .7,
});



// make lightboxes happen

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
 

    




    





