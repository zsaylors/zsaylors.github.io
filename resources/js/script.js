new fullpage('#fullpage', {
            anchors: ['zs'],
            menu: '#menu',
            navigationTooltips: ['main', 'projects', 'skills', 'about', 'dummy'],
            css3: true,
            scrollingSpeed: 600,
            slidesNavigation: false,
            responsiveHeight: 300,
            dragAndMove: true,
            dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
            controlArrows: false 
});



function videoEnded(video) {
    var i, speed, txt;

    i = 0;
    speed = 150;
    var txt =  'Always be coding!';
    document.querySelector('.main-text').textContent = '';

    function changeText() {
        if (i < txt.length) {
            document.querySelector(".main-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(changeText, speed);
        }
    }
    changeText();
};

/*  Figure out how to change this to main page */
function videoStarted(video) {
    document.querySelector('.main-text').textContent = '...';
};



/*  Popup  */
var modal, btn, span;
modal = document.getElementById("myModal");
btn = document.getElementById("myBtn");
span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



/******************* My first teacher non-guided JavaScript project *******************/
/* ... that may violate the dry pinciple, but I am/was a noob, shhhhh ... *************/

/***   At a later date try to consolidate.  Also fix bug were ... maybe setTimeout needs to be used in order to prevent slider being on page 1 when it is really on pg 4 from hitting the side futton too fast. ***/

if (window.location.hash.indexOf('#zs/projects') == 0) {
    document.querySelector("#mainBtn2").style.borderBottom = '2px solid black';
} else if (window.location.hash.indexOf('#zs/skills') == 0) {
    document.querySelector("#mainBtn3").style.borderBottom = '2px solid black';
} else if (window.location.hash.indexOf('#zs/about') == 0) {
    document.querySelector("#mainBtn4").style.borderBottom = '2px solid black';
} else {
    document.querySelector("#mainBtn1").style.borderBottom = '2px solid black';
}


document.onkeydown = function(e) {
    if (window.location.hash == '#zs/about') {
        switch (e.keyCode) {
            case 37:
                document.querySelector("#mainBtn3").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn3").style.transition= 'all 0.1s ease-in-out';
                deleteColor3();
                break
            case 39:
                document.querySelector("#mainBtn1").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn1").style.transition= 'all 0.3s ease-in-out';
                deleteColor1();
                break     
        };
    } else if (window.location.hash == '#zs/skills') {
        switch (e.keyCode) {
            case 37:
                document.querySelector("#mainBtn2").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn2").style.transition= 'all 0.3s ease-in-out';
                deleteColor2();
                break
            case 39:
                document.querySelector("#mainBtn4").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn4").style.transition= 'all 0.3s ease-in-out';
                deleteColor4();
                break
        };
    } else if (window.location.hash == '#zs/projects') {
        switch (e.keyCode) {
            case 37:
                document.querySelector("#mainBtn1").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn1").style.transition= 'all 0.3s ease-in-out';
                deleteColor1();
                break
            case 39:
                document.querySelector("#mainBtn3").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn3").style.transition= 'all 0.3s ease-in-out';
                deleteColor3();
                break
        };
    } else {/*if (window.location.hash == '#zs') {*/
        switch (e.keyCode) {
            case 37:
                document.querySelector("#mainBtn4").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn4").style.transition= 'all 0.3s ease-in-out';
                deleteColor4();
                break
            case 39:
                document.querySelector("#mainBtn2").style.borderBottom = '2px solid black';
                document.querySelector("#mainBtn2").style.transition= 'all 0.3s ease-in-out';
                deleteColor2();
                break
        };
    } 
};


/* DELETES UNDERLINE */
function deleteColor4(){
    document.querySelector("#mainBtn1").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn2").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn3").style.borderBottom = '0px solid black';
};

function deleteColor3(){
    document.querySelector("#mainBtn1").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn2").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn4").style.borderBottom = '0px solid black';
};

function deleteColor2(){
    document.querySelector("#mainBtn1").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn3").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn4").style.borderBottom = '0px solid black';
};

function deleteColor1(){
    document.querySelector("#mainBtn2").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn3").style.borderBottom = '0px solid black';
    document.querySelector("#mainBtn4").style.borderBottom = '0px solid black';
};


/*  CHANGES CURRENT UNDERLINE */ 
function changeColor1() {
     document.querySelector("#mainBtn1").style.borderBottom = '2px solid black';
     document.querySelector("#mainBtn1").style.transition= 'all 0.3s ease-in-out';
}
function changeColor2() {
     document.querySelector("#mainBtn2").style.borderBottom = '2px solid black';
     document.querySelector("#mainBtn2").style.transition= 'all 0.3s ease-in-out';
}
function changeColor3() {
     document.querySelector("#mainBtn3").style.borderBottom = '2px solid black';
     document.querySelector("#mainBtn3").style.transition= 'all 0.3s ease-in-out';
}
function changeColor4() {
     document.querySelector("#mainBtn4").style.borderBottom = '2px solid black';
     document.querySelector("#mainBtn4").style.transition= 'all 0.3s ease-in-out';
}


/* COMPILES UNDERLINE CHANGES */
var el = document.getElementById("mainBtn4");
if (el.addEventListener) {
    el.addEventListener("click", changeColor4, false);
    el.addEventListener("click", deleteColor4, false);  
} else if (el.attachEvent) {
    el.attachEvent('onclick', changeColor4);
    el.attachEvent('onclick', deleteColor4);
};

var el = document.getElementById("mainBtn3");
if (el.addEventListener) {
    el.addEventListener("click", changeColor3, false);
    el.addEventListener("click", deleteColor3, false);
} else if (el.attachEvent) {
    el.attachEvent('onclick', changeColor3);
    el.attachEvent('onclick', deleteColor3);
};

var el = document.getElementById("mainBtn2");
if (el.addEventListener) {
    el.addEventListener("click", changeColor2, false);
    el.addEventListener("click", deleteColor2, false);
} else if (el.attachEvent) {
    el.attachEvent('onclick', changeColor2);
    el.attachEvent('onclick', deleteColor2);
};

var el = document.getElementById("mainBtn1");
if (el.addEventListener) {
    el.addEventListener("click", changeColor1, false);
    el.addEventListener("click", deleteColor1, false);
} else if (el.attachEvent) {
    el.attachEvent('onclick', changeColor1);
    el.attachEvent('onclick', deleteColor1);
};