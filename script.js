
console.log

console.log(location.href)
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const d = new Date();
console.log(days[d.getDay()]);
console.log(document.cookie)

function logMovement(event) {
  resetTimer();
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

  resetTimer();
}


let scrollM = []
window.addEventListener("scroll", (event) => {
  let s = this.scrollY;
  scrollM.push(s)
  resetTimer();
});

let keyPress = []
document.onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  keyPress.push(charStr);
  resetTimer();
};




const interval = setInterval(function() {
  


}, 2000);








keypressCount= keyPress.length;
scrollCount = scrollM.length;
mousebuttonCount = mouseButton.length;
  
        window.onload = resetTimer;
       // window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;
        //window.ontouchstart = resetTimer;
        window.onclick = resetTimer;
        //window.onkeypress = resetTimer;


        let timer, currSeconds = 0;
        let timenow = Date.now();
  
        function resetTimer() {
          if(currSeconds > 2 ){
            idletime.push(timenow-currSeconds);
            idleduration.push(currSeconds);
          }

            currSeconds = 0; 
            timenow = Date.now();

         }




var intervalId = window.setInterval(function(){
  
              currSeconds++;
            console.log(currSeconds)
}, 1000);



let idletime = [];
let idleduration = []
let idletimeCount = 0;
let idledurationCount = 0
let enter_time = 0;
let left_time = 0;



//onload

enter_time = Date.now();

window.addEventListener('unload', function(){
  left_time = Date.now();
})

window.addEventListener('load', function(){
  enter_time = Date.now();
})




idletimeCount = idletime.length;
idledurationCount = idleduration.length;

    if(idletimeCount > 50){
      let removeddletime = arrrayX.splice(0, idletimeCount)
      let removedidleduration = arrrayY.splice(0, idletimeCount)

      
      var act1 = {
        idle_time: JSON.stringify(removeddletime),
        idle_duration: JSON.stringify(removedidleduration),
        enter_time: JSON.stringify(enter_time),
        left_time : JSON.stringify(left_time)
      }
      
      
        fetch('https://marah.xyz/api/activity2', {
        method: "POST",
        body: JSON.stringify(act1),
        headers: {"Content-type": "application/json",
              "Authorization": "Basic" + btoa('grader' + ":" + "cse135") }
      }).then(
        function(response) {
          if (response.status != 200) {
            idletime.push(removedX)
            idleduration.push(removedY)}

          })
        }
      