const randomButton = document.getElementById('buttonRandom');
const submitButton = document.getElementById('buttonSubmit');
const inputCatagory = document.getElementById('catagory');
var textBox = document.getElementById('demo');
window.onload = () => {
    splashMessages = [
        "Now with more jokes!",
        "wow text so cool",
        "\"Best website known to man\" -probably someone",
        "wow this text changes every time the website starts isn't that so cool",
        "this website took me like 4 hours to make which is kind of sad",
        "\"why did I do this\" - Me",
        "Generic splash text",
        "Pro tip: press R to generate a random joke to speed up your Chuck Norris joke consumption"
    ]
    document.getElementById('splashtext').innerHTML = splashMessages[Math.floor(Math.random() * splashMessages.length)]
}
randomButton.onclick = randomCall;
randomCall();
window.addEventListener("keyup", (e) => {
    if (e.code === "KeyR") {
        randomCall();
    }
});

function randomCall() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => textBox.innerHTML = '\"'+data.value+'\"')
}


submitButton.onclick = () => {
    const catagorylist = document.getElementById("catagoryList");
    var value = catagorylist.options[catagorylist.selectedIndex].text;
    fetch(`https://api.chucknorris.io/jokes/random?category=${value.toLowerCase()}`)
    .then(res => res.json())
    .then(data => textBox.innerHTML = '\"'+data.value+'\"')
}