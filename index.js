let textToWork = text.split("")
let letters = document. querySelector('.letter')


createDivs()
function createDivs(){
    let div = ""
    

    for (let i = 0; i < textToWork.length; i++) {
        div = document.createElement("div")
        div.className = "div"
        div.innerHTML = textToWork[i]
        letters.appendChild(div) 
    }
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 300
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 7000,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
  });
 





