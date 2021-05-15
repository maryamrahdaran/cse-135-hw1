const userAgent = navigator.userAgent;
const language = navigator.language;
const cookie_enabled = navigator.cookieEnabled;
const cookie =  Date.now() + Math.random();
const script = 1;
var css = 1;
var connection;
const height = window.screen.height
const width = window.screen.width
const page = location.href;
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;
let img = document.getElementById('test')

let image = 0;
if(img.width > 100){
  image = 1;
}

let currSeconds = 0;
let timenow = Date.now();


if(window.getComputedStyle(document.getElementById('myId')).display == 'block'){
  css = 0;
}


if(navigator.connection != undefined){
  connection = navigator.connection.effectiveType
}

var data = {
  userAgent : userAgent,
  language : language,
  cookie_enabled : cookie_enabled,
  script : script,
  css : css,
  image : image,
  connection : connection,
  height : height,
  width : width,
  innerWidth : innerWidth,
  innerHeight : innerHeight
  
}


fetch('https://marah.xyz/api/static', {
method: "POST",
body: JSON.stringify(data),
headers: {"Content-type": "application/json",
"Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
})

///////////////////////



//activity1
let arrrayX = []
let arrrayY = []
let mousemoveCount = 0;
let keypressCount= 0;
let scrollCount = 0;
let mousebuttonCount = 0;





//activity2

let idletime = [];
let idleduration = []
let idletimeCount = 0;
let idledurationCount = 0
let enter_time = 0;
let left_time = 0;
let idlet = 0;
let idled = 0;

//performance
var pf = performance.getEntriesByType("navigation")
let load_end_arr = new Array();
load_end_arr.push(-1)
load_end_arr.push(pf[0].loadEventEnd)
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const d = new Date();
let weekday = days[d.getDay()]




window.addEventListener('beforeunload', function (e) {
  //      e.preventDefault();
  //       e.returnValue = '';
  
  left_time = Date.now();
  
  
  var a2 = {
    idle_time: JSON.stringify(idletime),
    idle_duration: JSON.stringify(idleduration),
    enter_time: enter_time,
    left_time : left_time,
    page : location.href,
    cookie: cookie,
    cookie_enabled : cookie_enabled,
  }
  
  
  navigator.sendBeacon("https://marah.xyz/api/activity2",JSON.stringify(a2))
  //navigator.sendBeacon("https://marah.xyz/api/activity1",JSON.stringify({test:'test'}))
  
});



window.addEventListener('load', function(){
  enter_time = Date.now();
  resetTimer()
  var intervalId = window.setInterval(function(){
    currSeconds++;
    if ( load_end_arr[load_end_arr.length - 1] != load_end_arr[load_end_arr.length - 2] && pf != undefined  ) {
      
      var per = {
        start_load : pf[0].loadEventStart,
        end_load : pf[0].loadEventEnd,
        time_object : pf,
        load_time : (pf[0].loadEventEnd - pf[0].loadEventStart),
        cookie: cookie,
        cookie_enabled : cookie_enabled,
        page : page,
        weekday : weekday
      }
      
      fetch('https://marah.xyz/api/performance', {
      method: "POST",
      body: JSON.stringify(per),
      headers: {"Content-type": "application/json",
      "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
    })
  }
  
  if(load_end_arr[load_end_arr.length - 1] != load_end_arr[load_end_arr.length - 2] ){
    console.log(load_end_arr)
    load_end_arr.push(pf[0].loadEventEnd)
  }
  // activity1
  mousemoveCount = arrrayX.length;
  keypressCount= keyPress.length;
  scrollCount = scrollM.length;
  mousebuttonCount = mouseButton.length;
  if(mousemoveCount > 50 || keypressCount >0 || mousebuttonCount > 1 || scrollCount >2 ){
    let removedX = arrrayX.splice(0, mousemoveCount)
    let removedY = arrrayY.splice(0, mousemoveCount)
    let removedkeypress = keyPress.splice(0, keypressCount)
    let removedmousebutton = mouseButton.splice(0, mousebuttonCount)
    let removedscroll = scrollM.splice(0, scrollCount)
    
    var act1 = {
      mouse_x: JSON.stringify(removedX),
      mouse_y: JSON.stringify(removedY),
      scroll: JSON.stringify(removedscroll),
      mouse_button : JSON.stringify(removedmousebutton),
      key_press: JSON.stringify(removedkeypress),
      page : location.href,
      cookie: cookie,
      cookie_enabled : cookie_enabled,
      
    }
    
    
    fetch('https://marah.xyz/api/activity1', {
    method: "POST",
    body: JSON.stringify(act1),
    headers: {"Content-type": "application/json",
    "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
  }).then(
    function(response) {
      if (response.status != 200) {
        arrrayX.concat(removedX)
        arrrayY.concat(removedY)
        keyPress.concat(removedkeypress)
        scrollM.concat( removedscroll)
        mouseButton.concat(removedmousebutton)}
      })
    }
    
  }, 1000);
  
});




function logMovement(event) {
  resetTimer()
  arrrayX.push(event.pageX);
  arrrayY.push(event.pageY);
}

document.addEventListener('mousemove', logMovement);

fetch('https://marah.xyz/api/static', {
method: "POST",
body: JSON.stringify(data),
headers: {"Content-type": "application/json",
"Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
})


window.onmousedown = resetTimer;
window.onclick = resetTimer;
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
  resetTimer();
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  keyPress.push(charStr);
};



window.onmousedown = resetTimer;
window.onclick = resetTimer;
document.addEventListener('mouseup', logMouseButton);



function resetTimer() {
  console.log("reset timet");
  if(currSeconds > 2 ){
    idletime.push(Date.now()-currSeconds);
    idleduration.push(currSeconds);
    console.log("activitty2")
    var act2 = {
      idle_time: Date.now()-currSeconds,
      idle_duration: currSeconds,
      enter_time: enter_time,
      left_time : left_time,
      page : location.href,
      cookie: cookie,
      cookie_enabled : cookie_enabled,
    }
    
    fetch('https://marah.xyz/api/activity2', {
    method: "POST",
    body: JSON.stringify(act2),
    headers: {"Content-type": "application/json",
    "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
  })
}

currSeconds = 0;
timenow = Date.now();

}

console.log("success");
