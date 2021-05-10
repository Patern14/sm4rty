console.log("App.js CONNECTED")

const toggleVisibility = (e) => {
    //console.log(e.target)
    //console.log(e.target.closest("div").childNodes[1])
    //console.log(e.target.closest("div").childNodes)

    const target = e.target.closest("div");     // Target the full div
    const toggleArrow = target.childNodes[1].classList.toggle("up");    // Node[1] = button
    const answerVisibility = target.childNodes[3].classList.toggle("visible");   // Node[3] = .answer
}

// The following method display ALL the .answer
/* const toggleDisplay = (e) => {
    console.log("TOGGLE")
   console.log(e.target)
   console.log(this.target)
    for(let i = 0; i < answer.length; i += 1) {
        answer.item(i).classList.toggle("visible");
    }
    //span.classList.toggle("span--_visible")
} */

