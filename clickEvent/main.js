const h1 = document.getElementById("1")
const h2 = document.getElementById("2")
const h3 = document.getElementById("3")

h3.addEventListener("click", function() {
    const text = h3.textContent
    console.log("I got clicked on the third h3 element! And it says: " + text)
})

h2.addEventListener("click", function() {
    const text = h2.textContent
    console.log("I got clicked on the second h3 element! And it says: " + text)
})

h1.addEventListener("click", function() {
    const text = h1.textContent
    console.log("I got clicked on the first h3 element! And it says: " + text)
})