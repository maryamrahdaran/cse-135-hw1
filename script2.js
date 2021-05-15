/*
//const perfData = window.performance.timing;
//const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

let arrrayX = []
let arrrayY = []
//let pf = performance.getEntriesByType("navigation")
let load_time =pf[0].loadEventEnd -  pf[0].loadEventStart;


window.addEventListener("load", function(){


});



console.log(location.href)
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const d = new Date();
console.log(days[d.getDay()]);
console.log(document.cookie)

function logMovement(event) {
  arrrayX.push(event.pageX);
  arrrayY.push(event.pageX);
}

document.addEventListener('mousemove', logMovement);




document.addEventListener('mouseup', logMouseButton);

let mouseButton = [];

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        mouseButton.push('L');
        break;
      case 1:
        mouseButton.push( 'M');
        break;
      case 2:
        mouseButton.push('R');
        break;
      default:
        mouseButton.push ("U");
    }
  }
}


let scrollM = []
window.addEventListener("scroll", (event) => {
  let s = this.scrollY;
  scrollM.push(s)
});

let keyPress = []
document.onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  keyPress.push(charStr);
};


var act1 = {
  mouse_x: JSON.stringify(arrrayX),
  mouse_y: JSON.stringify(arrrayY),
  scroll: Math.max(...scrollM)
  key_press: JSON.stringify(keyPress),
  page = location.href
}

const interval = setInterval(function() {
  
  fetch('https://marah.xyz/api/activity1', {
  method: "POST",
  body: JSON.stringify(act1),
  headers: {"Content-type": "application/json",
        "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
})

}, 2000);
















var t;
function intervalId (){
  /// call your function here
    if ( load_end_arr[load_end_arr.length - 1] == load_end_arr[load_end_arr.length - 2]  && load_end_arr[load_end_arr.length - 1] !=0) {
        var per = {
                start_load : pf[0].loadEventStart,
                end_load : pf[0].loadEventEnd,
                time_object : pf[0],
                load_time : (pf[0].loadEventEnd - pf[0].loadEventStart),
                cookie: cookie,
                cookie_enabled : cookie_enabled,
                page : page
        }


      fetch('https://marah.xyz/api/performance', {
      method: "POST",
      body: JSON.stringify(per),
      headers: {"Content-type": "application/json",
        "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
})
    }

    else{
      load_end_arr.push(pf[0].loadEventEnd)
    }
  }

function timerset(){
  t = etTimeout(intervalId, 1000);
}















var intervalId = window.setInterval(function(){
  /// call your function here
    if ( load_end_arr[load_end_arr.length - 1] == load_end_arr[load_end_arr.length - 2]  && load_end_arr[load_end_arr.length - 1] !=0) {
        var per = {
                start_load : pf[0].loadEventStart,
                end_load : pf[0].loadEventEnd,
                time_object : pf[0],
                load_time : (pf[0].loadEventEnd - pf[0].loadEventStart),
                cookie: cookie,
                cookie_enabled : cookie_enabled,
                page : page
        }


      fetch('https://marah.xyz/api/performance', {
      method: "POST",
      body: JSON.stringify(per),
      headers: {"Content-type": "application/json",
        "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
})
      clearInterval(intervalId);
}
      else{
        load_end_arr.push(pf[0].loadEventEnd)
      }
}, 500);

*/

setInterval(function(){
  console.log("A")
}, 5000);

setInterval(function(){
  console.log("B")
}, 3000);

setInterval(function(){
  console.log("C")
}, 500);