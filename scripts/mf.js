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

/* var aboutContent = document.getElementById('about'),
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
    }
}; 
var closeInfo = document.getElementById('close-info'),
    hideAbout = function() {
    logo.classList.remove('fixed');    
  //  aboutContent.classList.remove('show');
  //  aboutAlt.classList.toggle('extra');
    document.querySelector('body').classList.remove('lock');
    };

// logo.addEventListener('click', showAbout, false);
// aboutAlt.addEventListener('click', showAbout, false);
// closeInfo.addEventListener('click', hideAbout, false);

*/


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

// change document BG color when scrolling past elements.  NOTE: make sure CSS is ordered properly, and keep one use per color per page. big thanks to Beverly Hooten for making the base code: http://blog.fofwebdesign.co.uk/41-add-classes-to-an-element-when-scrolled-into-viewport


      function debounce(fn, ms) { // https://remysharp.com/2010/07/21/throttling-function-calls
        var time = null;
        return function() {
          var a = arguments, t = this;
          clearTimeout(time);
          time = setTimeout(function() { fn.apply(t, a); }, ms);
          }
        }
      function throttle(fn, ms) { // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
        var time, last = 0;
        return function() {
          var a = arguments, t = this, now = +(new Date), exe = function() { last = now; fn.apply(t, a); };
          clearTimeout(time);
          (now >= last + ms) ? exe() : time = setTimeout(exe, ms);
          }
        }
      function hasClass(el, cls) {
        if (el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { return true; } 
        }
      function addClass(el, cls) {
        if (!el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { el.className += ' '+cls; } 
        }
      function delClass(el, cls) {
        el.className = el.className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');
        }
    
      document.documentElement.className += ' js'; // adds class="js" to <html> element
    
      function elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit) {
        var winY = window.innerHeight || document.documentElement.clientHeight, 
            elTriggerLength = elemTrigger.length, 
            elTargetLength, distTop, distPercent, distPixels, distUnit, elTarget, i, j;
        for (i = 0; i < elTriggerLength; ++i) {
          elTarget = document.querySelectorAll('.'+elemTarget);
          elTargetLength = elTarget.length;
          distTop = elemTrigger[i].getBoundingClientRect().top;
          distPercent = Math.round((distTop / winY) * 100);
          distPixels = Math.round(distTop);
          distUnit = unit == 'percent' ? distPercent : distPixels;
          if (distUnit <= distanceFromTop) {
            if (!hasClass(elemTrigger[i], elemTarget)) {
              for (j = 0; j < elTargetLength; ++j) {
                if (!hasClass(elTarget[j], classToAdd)) { addClass(elTarget[j], classToAdd); }
                }
              } else {
              if (!hasClass(elemTrigger[i], classToAdd)) { addClass(elemTrigger[i], classToAdd); }
              }
            } else {
            delClass(elemTrigger[i], classToAdd);
            if (!hasClass(elemTrigger[i], elemTarget)) {
              for (j = 0; j < elTargetLength; ++j) { delClass(elTarget[j], classToAdd); }
              }
            }
          }
        }
      // params:  trigger element, target element class, classes to add to target element, trigger element distance from top, unit ('percent' or 'pixels')
      // usage:   elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit);
    
      window.addEventListener('scroll', throttle(function() {

    elementFromTop(document.querySelectorAll('.change-to-red'),  'bg', 'bg--red',  100, 'pixels'); // as top of element hits top of viewport
    elementFromTop(document.querySelectorAll('.change-to-blue'),  'bg', 'bg--blue',  100, 'pixels'); 
    elementFromTop(document.querySelectorAll('.change-to-green'),  'bg', 'bg--green',  100, 'pixels'); 
    elementFromTop(document.querySelectorAll('.change-to-grey'),  'bg', 'bg--grey',  100, 'pixels'); 
    elementFromTop(document.querySelectorAll('.change-to-pink'),  'bg',  'bg--pink',  100, 'pixels');
    elementFromTop(document.querySelectorAll('.change-to-amethyst'),  'bg', 'bg--amethyst',  100, 'pixels');  

        }, 100), false);
    
      window.addEventListener('resize', debounce(function() {
        elementFromTop(document.querySelectorAll('.change-to-red'),  'bg', 'bg--red',  100, 'pixels'); // as top of element hits top of viewport
        elementFromTop(document.querySelectorAll('.change-to-blue'),  'bg', 'bg--blue',  100, 'pixels'); 
        elementFromTop(document.querySelectorAll('.change-to-green'),  'bg', 'bg--green',  100, 'pixels'); 
        elementFromTop(document.querySelectorAll('.change-to-grey'),  'bg', 'bg--grey',  100, 'pixels'); 
        elementFromTop(document.querySelectorAll('.change-to-pink'),  'bg',  'bg--pink',  100, 'pixels');
        elementFromTop(document.querySelectorAll('.change-to-amethyst'),  'bg', 'bg--amethyst',  100, 'pixels');  
    
            }, 100), false);

    



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


