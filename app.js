console.log("CONNECTED")

const toggleVisibility = (e) => {
    //console.log("TOGGLE")
    //console.log(e.target)
    //console.log(e.target.closest("div").childNodes[3])

    const target = e.target.closest("div");     // Target the full div
    const secondChild = target.childNodes[3].classList.toggle("visible");   // Node[3] = .answer
    
    //console.log(secondChild)
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

