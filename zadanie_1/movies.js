avengers_desc = "This is a avengers desc. "
saw_desc = "This is a avengers desc. "
joker_desc = "This is a avengers desc. "

function changeToAvengers() {
    document.getElementById('header_name').innerHTML = "Avengers"
    document.getElementById('content').innerHTML = avengers_desc
}
function changeToSaw() {
    document.getElementById('header_name').innerHTML = "Saw"
    document.getElementById('content').innerHTML = saw_desc
}
function changeToJoker() {
    document.getElementById('header_name').innerHTML = "Joker"
    document.getElementById('content').innerHTML = joker_desc
}